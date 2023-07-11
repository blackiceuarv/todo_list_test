import { FC } from 'react';
import { CloseButtonProps } from 'react-toastify';

import styles from './NotificationCloseButton.module.scss';
import Icon from '@/common/components/Icon/Icon';
import {ICON_NAMES} from "@/common/constants";

export const NotificationCloseButton: FC<CloseButtonProps> = ({ closeToast }) => (
  <Icon
    className={styles.notificationCloseButton}
    icon={ICON_NAMES.CANCEL}
    onClick={closeToast}
  />
);
