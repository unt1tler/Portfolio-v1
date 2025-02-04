import { NotificationPayload } from '../types/notifications';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendWebhookWithRetry(
  url: string, 
  payload: any, 
  attempt: number = 1
): Promise<Response> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Portfolio Bot',
        avatar_url: 'https://i.imgur.com/AfFp7pu.png',
        embeds: [{
          title: payload.title,
          description: payload.description,
          color: payload.color || 0x7289DA,
          fields: payload.fields || [],
          timestamp: new Date().toISOString(),
          footer: {
            text: `Type: ${payload.type}`
          }
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    if (attempt < MAX_RETRIES) {
      await wait(RETRY_DELAY * attempt);
      return sendWebhookWithRetry(url, payload, attempt + 1);
    }
    throw error;
  }
}

export async function sendNotification(
  type: 'pageView' | 'error' | 'contact' | 'analytics', 
  payload: NotificationPayload
): Promise<boolean> {
  const webhookUrl = {
    pageView: import.meta.env.VITE_DISCORD_PAGEVIEW_WEBHOOK_URL,
    error: import.meta.env.VITE_DISCORD_ERROR_WEBHOOK_URL,
    contact: import.meta.env.VITE_DISCORD_WEBHOOK_URL,
    analytics: import.meta.env.VITE_DISCORD_PAGEVIEW_WEBHOOK_URL
  }[type];

  if (!webhookUrl) {
    console.warn(`Discord webhook URL not configured for type: ${type}`);
    return false;
  }

  try {
    await sendWebhookWithRetry(webhookUrl, payload);
    return true;
  } catch (error) {
    console.error(`Failed to send ${type} notification after ${MAX_RETRIES} attempts:`, error);
    return false;
  }
}