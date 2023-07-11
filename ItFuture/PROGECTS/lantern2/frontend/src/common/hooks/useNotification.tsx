import { useCallback } from 'react';
import { toast, ToastContent, ToastOptions, TypeOptions } from 'react-toastify';
import { NotificationCloseButton } from '@/common/components/NotificationCloseButton';

export enum NOTIFICATION_TYPES {
  Error = 'error',
  Info = 'info',
  Success = 'success',
}

export enum POSITION_TYPES {
  bottomCenter = 'bottom-center',
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right',
  topCenter = 'top-center',
  topLeft = ' top-left',
  topRight = 'top-right',
}

const defaultConfig: ToastOptions = {
  autoClose: 3000,
  closeOnClick: true,
  data: {},
  draggable: true,
  hideProgressBar: false,
  pauseOnHover: true,
  position: POSITION_TYPES.topRight,
};

export const useNotification = () =>
  useCallback(
    (
      content: ToastContent,
      type: TypeOptions = NOTIFICATION_TYPES.Info,
      config?: ToastOptions,
    ) =>
      toast(content, {
        ...defaultConfig,
        ...config,
        type,
        closeButton: NotificationCloseButton,
        icon: false,
        className: `toast ${type}-toast`,
        progressClassName: `progress ${type}-progress`,
      }),
    [],
  );
