import { FC, ReactNode, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import classNames from 'classnames';

import { Button } from '../Button/Button';

import { PageLoader } from '../PageLoader/PageLoader';

import styles from './ConfirmModal.module.scss';
import Icon from '@/common/components/Icon/Icon';
import {ICON_NAMES} from "@/common/constants";



export interface IConfirmModalProps {
  header: string;
  textAlign?: 'center';
  buttonConfirmLabel?: string;
  buttonCancelLabel?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  children?: ReactNode;
  center?: boolean;
  blockScroll?: boolean;
  closeOnOverlayClick?: boolean;
  classNames?: {
    header?: string;
    body?: string;
    buttonCancel?: string;
    buttonConfirm?: string;
  };
}

export const ConfirmModal: FC<IConfirmModalProps> = ({
  header,
  textAlign = 'left',
  isOpen,
  onClose,
  onConfirm,
  children,
  center = true,
  blockScroll = false,
  closeOnOverlayClick = true,
  buttonCancelLabel = undefined,
  buttonConfirmLabel = 'Confirm',
  classNames: providedClassNames,
}) => {
  const [modalLoading, setModalLoading] = useState<boolean>(false);

  const closeIcon = <Icon icon={ICON_NAMES.CANCEL} className={styles.closeIcon} />;

  const headerClasses = classNames(styles.header, providedClassNames?.header);
  const bodyModalClasses = classNames(styles.bodyModal, providedClassNames?.body);
  const buttonCancelClasses = classNames(styles.button, providedClassNames?.buttonCancel);
  const buttonConfirmClasses = classNames(
    styles.button,
    providedClassNames?.buttonConfirm,
  );

  const handleConfirmModal = async () => {
    setModalLoading(true);
    await new Promise((resolve, reject) => {
      resolve(onConfirm?.());
    });
    setModalLoading(false);
  };

  return (
    <Modal
      blockScroll={blockScroll}
      closeOnOverlayClick={closeOnOverlayClick}
      center={center}
      classNames={{
        modal: styles.confirmModal,
        closeIcon: styles.closeIcon,
        closeButton: styles.closeButton,
      }}
      closeIcon={closeIcon}
      focusTrapped={false}
      open={isOpen}
      onClose={onClose}
    >
      {modalLoading && <PageLoader />}
      <div className={styles[textAlign]}>
        <div className={headerClasses}>{header}</div>
        <div className={bodyModalClasses}>{children}</div>
      </div>
      <div className={styles.footer}>
        <Button className={buttonCancelClasses} onClick={onClose}>
          {buttonCancelLabel ? buttonCancelLabel : 'cancel'}
        </Button>
        <Button
          className={buttonConfirmClasses}
          onClick={handleConfirmModal}
          disabled={modalLoading}
        >
          {buttonConfirmLabel}
        </Button>
      </div>
    </Modal>
  );
};
