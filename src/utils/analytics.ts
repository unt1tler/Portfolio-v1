import { siteConfig } from '../config/site';
import { sendNotification } from './notifications';

interface AnalyticsStats {
  visitors: number;
  pageViews: number;
  lastSent: number;
}

const STATS_KEY = 'analyticsStats';
const DAY_IN_MS = 24 * 60 * 60 * 1000;

function getStats(): AnalyticsStats {
  const saved = localStorage.getItem(STATS_KEY);
  return saved ? JSON.parse(saved) : {
    visitors: 0,
    pageViews: 0,
    lastSent: 0
  };
}

function saveStats(stats: AnalyticsStats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

async function sendDailyStats() {
  const stats = getStats();
  const now = Date.now();

  // Send stats immediately for testing and then every 24 hours
  if (now - stats.lastSent >= DAY_IN_MS || stats.lastSent === 0) {
    await sendNotification('analytics', {
      type: 'analytics',
      title: 'Daily Analytics Report',
      description: 'Website statistics for the last 24 hours',
      color: 0x00FF00,
      fields: [
        { name: 'Total Visitors', value: stats.visitors.toString(), inline: true },
        { name: 'Total Page Views', value: stats.pageViews.toString(), inline: true },
        { name: 'Average Views/Visitor', value: (stats.pageViews / (stats.visitors || 1)).toFixed(2), inline: true }
      ]
    });

    // Reset stats and update last sent time
    stats.lastSent = now;
    saveStats(stats);
  }
}

export async function trackPageView() {
  if (!siteConfig.analytics?.enabled) return;

  try {
    const stats = getStats();
    const isNewVisitor = !localStorage.getItem('visited');

    if (isNewVisitor) {
      localStorage.setItem('visited', 'true');
      stats.visitors++;
    }

    stats.pageViews++;
    saveStats(stats);

    // Send pageview notification
    await sendNotification('pageView', {
      type: 'pageView',
      title: 'New Page View',
      description: 'A user visited the website',
      color: 0x7289DA,
      fields: [
        { name: 'Path', value: window.location.pathname, inline: true },
        { name: 'New Visitor', value: isNewVisitor ? 'Yes' : 'No', inline: true }
      ]
    });

    // Update UI
    const visitorCountElement = document.getElementById('visitor-count');
    const pageViewsElement = document.getElementById('page-views');
    if (visitorCountElement) visitorCountElement.textContent = stats.visitors.toString();
    if (pageViewsElement) pageViewsElement.textContent = stats.pageViews.toString();

    // Send daily stats if needed
    await sendDailyStats();

  } catch (error) {
    console.error('Error tracking analytics:', error);
    await sendNotification('error', {
      type: 'error',
      title: 'Analytics Error',
      description: 'Failed to track analytics',
      color: 0xFF0000,
      fields: [{ name: 'Error', value: String(error) }]
    });
  }
}