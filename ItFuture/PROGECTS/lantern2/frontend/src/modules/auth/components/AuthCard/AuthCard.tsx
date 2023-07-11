import { FC, useState } from 'react';
import { MODAL_SIZES } from '@/common/components/Modal/constants';
import { AuthImageWrapper } from './AuthImageWrapper/AuthImageWrapper';
import { AuthForm } from '@/modules/auth/components/AuthCard/AuthForm/AuthForm';
import { AUTH_STATUS, authVariant } from '@/common/constants';
import { Modal } from '@/common/components';

import styles from './AuthCard.module.scss';

export interface INewPublicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHandleClick: () => void;
}

export const AuthCard: FC<INewPublicationModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState(AUTH_STATUS.LogIn);

  const handleChangeStatus = () => {
    setStatus(status === AUTH_STATUS.LogIn ? AUTH_STATUS.SignUp : AUTH_STATUS.LogIn);
  };

  return (
    <Modal
      bodyClassName={styles.modalBody}
      className={styles.authModal}
      isOpen={isOpen}
      onClose={onClose}
      size={MODAL_SIZES.XL}
      withFooter={false}
      center={true}
    >
      <div className={styles.authCardWrapper}>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <AuthForm
              handleChangeStatus={handleChangeStatus}
              authVariant={authVariant[status]}
              status={status}
              onClose={onClose}
            />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <AuthImageWrapper />
        </div>
      </div>
    </Modal>
  );
};
