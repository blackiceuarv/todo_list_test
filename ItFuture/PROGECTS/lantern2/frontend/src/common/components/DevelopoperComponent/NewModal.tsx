import { FC } from 'react';

import styles from './NewModal.module.scss';
import { Button, Modal } from '@/common/components';
import { MODAL_SIZES } from '@/common/components/Modal/constants';

export interface INewPublicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHandleClick: () => void;
}

export const NewModal: FC<INewPublicationModalProps> = ({
  isOpen,
  onClose,
  onHandleClick,
}) => {
  return (
    <Modal
      bodyClassName={styles.modalBody}
      className={styles.newPublicationModal}
      isOpen={isOpen}
      header={'Modal'}
      onClose={onClose}
      size={MODAL_SIZES.SM}
      withFooter={false}
      center={true}
    >
      <div className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis ipsa, laborum mollitia omnis quis soluta vero? Commodi consequuntur deleniti laudantium recusandae unde! Inventore minus officia quae ratione suscipit. Vitae.
      </div>
      <div className={styles.actions}>
        <Button onClick={onClose}>Сancel</Button>
        <Button onClick={onHandleClick}>Перейти</Button>
      </div>
    </Modal>
  );
};
