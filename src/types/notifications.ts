export type NotificationType = 'pageView' | 'error' | 'analytics' | 'contact';

export interface NotificationPayload {
  type: string;
  title: string;
  description: string;
  color?: number;
  fields?: Array<{
    name: string;
    value: string;
    inline?: boolean;
  }>;
}