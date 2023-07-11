import { FC } from 'react';
import { Logo } from '@/common/components/Logo/Logo';
import {Button} from "@/common/components";
import {HeaderNavMenu} from "@/common/components/Header/HeaderNavMenu/HeaderNavMenu";

import styles from './Header.module.scss';

export interface IHeaderProps {
  isOpen: boolean;
  handleClick?: () => void;
  showNewPublicationModal?: () => void;
}

export const Header: FC<IHeaderProps> = ({
  isOpen,
  handleClick,
  showNewPublicationModal,
}) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.sideLeft}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.center}>
          <HeaderNavMenu/>
        </div>
        <div className={styles.sideRight}>
          <div className={styles.profile} onClick={showNewPublicationModal}>
            <Button className={styles.loginButton}>Вхід</Button>
          </div>
        </div>
      </header>
    </>
  );
};
