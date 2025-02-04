import { sendNotification } from './notifications';

export async function sendDiscordWebhook(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await sendNotification('contact', {
      type: 'contact',
      title: 'New Contact Form Submission',
      description: `From: ${data.name} (${data.email})`,
      color: 0x7289DA,
      fields: [
        {
          name: 'Message',
          value: data.message
        }
      ]
    });
    return true;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return false;
  }
}