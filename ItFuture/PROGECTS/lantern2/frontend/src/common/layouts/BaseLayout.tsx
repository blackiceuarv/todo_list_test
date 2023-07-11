import { FC, ReactNode } from 'react';
import { Footer, Header } from '@/common/components';
import { useBurger, useModal } from '@/common/hooks';
import { AuthCard } from '@/modules/auth/components/AuthCard/AuthCard';

interface IBaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout: FC<IBaseLayoutProps> = ({ children }) => {
  const { isOpen, handleClick } = useBurger();

  const [showNewPublicationModal] = useModal(AuthCard, {
    onHandleClick: () => console.log('onHandleClick'),
  });

  return (
    <>
      <Header
        isOpen={isOpen}
        handleClick={handleClick}
        showNewPublicationModal={showNewPublicationModal}
      />
      {!isOpen && <main>{children}</main>}

      <Footer />
    </>
  );
};
