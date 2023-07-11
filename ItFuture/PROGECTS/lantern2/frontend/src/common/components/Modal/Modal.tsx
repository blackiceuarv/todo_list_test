import { FC, ReactNode } from 'react';
import { Modal as ModalWrapper } from 'react-responsive-modal';
import classNames from 'classnames';
import 'react-responsive-modal/styles.css';
import { Button } from '@/common/components';
import {ICON_NAMES} from "@/common/constants";
import Icon from '@/common/components/Icon/Icon';
import {MODAL_SIZES} from "@/common/components/Modal/constants";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  children?: ReactNode;
  footerContent?: ReactNode;
  className?: string | null;
  buttonLabel?: string | null;
  buttonClassName?: string;
  bodyClassName?: string | null;
  footerAdditionalInfo?: string;
  size?: MODAL_SIZES;
  withFooter?: boolean;
  headerClassName?: string | null;
  footerClassName?: string | null;
  center?: boolean;
  disableCloseOnOverlay?: boolean;
}

export const Modal: FC<IModalProps> = ({
  isOpen,
  onClose,
  header,
  children,
  footerContent = null,
  className = null,
  buttonLabel = 'Close',
  buttonClassName,
  bodyClassName = null,
  footerAdditionalInfo = null,
  size = MODAL_SIZES.XS,
  withFooter = true,
  headerClassName = null,
  footerClassName = null,
  center = true,
  disableCloseOnOverlay = false,
}) => {
  const modalSize = size == MODAL_SIZES.CUSTOM ? null : size;
  const modalClassNames = { modal: classNames(modalSize, className) };

  const closeIcon = <Icon icon={ICON_NAMES.CANCEL} />;

  return (
    <>
      <ModalWrapper
        open={isOpen}
        onClose={onClose}
        classNames={modalClassNames}
        blockScroll={true}
        focusTrapped={false}
        closeOnOverlayClick={!disableCloseOnOverlay}
        center={center}
      >
        <div className={classNames('react-responsive-modal-header', headerClassName)}>
          {header}
        </div>
        <div className={classNames('react-responsive-modal-body', bodyClassName)}>
          {children}
        </div>
        {withFooter && (
          <div className={classNames('react-responsive-modal-footer', footerClassName)}>
            {footerAdditionalInfo}
            <Button className={buttonClassName} onClick={onClose}>
              {buttonLabel}
            </Button>
            {footerContent}
          </div>
        )}
      </ModalWrapper>
    </>
  );
};
