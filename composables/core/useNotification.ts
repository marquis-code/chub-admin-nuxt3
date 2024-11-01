import { ref } from 'vue';

export type NotificationType = 'success' | 'error';

interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

const notifications = ref<Notification[]>([]);

export const useNotification = () => {
  const addNotification = (message: string, type: NotificationType) => {
    const id = Date.now();
    notifications.value.push({ id, message, type });


    setTimeout(() => {
      notifications.value = notifications.value.filter((n) => n.id !== id);
    }, 5000);
  };

  const removeNotification = (id: number) => {
    notifications.value = notifications.value.filter((n) => n.id !== id);
  };

  return {
    notifications,
    addNotification,
    removeNotification,
  };
};
