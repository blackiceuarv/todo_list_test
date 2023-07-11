import { useModal } from './useModal';

import {
  ConfirmModal,
  IConfirmModalProps,
} from '../../components/ConfirmModal/ConfirmModal';

type TModifiedProps = Omit<IConfirmModalProps, 'isOpen' | 'onClose'>;

export const useConfirmModal = (options: TModifiedProps) => {
  return useModal(ConfirmModal, options);
};
