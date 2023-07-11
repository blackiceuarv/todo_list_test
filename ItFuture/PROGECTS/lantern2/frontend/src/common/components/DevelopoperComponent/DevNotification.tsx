import { NotificationContent } from '@/common/components/NotificationContent';
import { NOTIFICATION_TYPES, useNotification } from '@/common/hooks';
import { Button } from '@/common/components';

export const DevNotification = () => {
  const notify = useNotification();

  const handleClickSuccess = () => {
    notify(
      <NotificationContent
        title={'Успіх'}
        body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.m'}
      />,
      NOTIFICATION_TYPES.Success,
    );
  };

  const handleClickError = () => {
    notify(
      <NotificationContent
        title={'Сталася помилка'}
        body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
      />,
      NOTIFICATION_TYPES.Error,
    );
  };

  const handleClickInfo = () => {
    notify(
      <NotificationContent
        title={'Інформація'}
        body={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
      />,
      NOTIFICATION_TYPES.Info,
    );
  };

  return (
    <div>
      <h1>Notification</h1>
      <Button onClick={handleClickSuccess}>Success</Button>
      <Button onClick={handleClickError}>Error</Button>
      <Button onClick={handleClickInfo}>Info</Button>
    </div>
  );
};
