import { Button } from '@/common/components';
import { useModal } from '@/common/hooks';

import { useConfirmModal } from '@/common/hooks/useModalHook/useConfirmModal';
import { NewModal } from '@/common/components/DevelopoperComponent/NewModal';

export const OpenModal = () => {
  const modalOptions = {
    header: 'Confirm modal',
    buttonConfirmLabel: 'OK',
    // onConfirm,
    // onClose,
    // loading: loading,
    children: (
      <>
        <p>hello</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque
          consequatur debitis, distinctio eos, excepturi explicabo illum iste itaque iure
          minima obcaecati quae quidem quisquam similique vel! Asperiores, iste.
        </p>
      </>
    ),
  };

  const [showNewPublicationModal] = useModal(NewModal, {
    onHandleClick: () => console.log('onHandleClick'),
  });

  const [showConfirmModal] = useConfirmModal(modalOptions);
  //
  return (
    <>
      <Button onClick={showNewPublicationModal}>Modal</Button>
      <Button onClick={showConfirmModal}>Confirm modal</Button>
    </>
  );
};
