import { FC } from 'react';
import Link from 'next/link';
import { MENU_ITEMS } from '@/common/constants/menuItems';
import { SocialMedia } from '@/common/components/SocialMedia/SocialMedia';
import classNames from 'classnames';

import {EMPTY_STRING} from "@/common/constants";
import {IHeaderProps} from "@/common/components";

import styles from './DropdownMenu.module.scss';

export const DropdownMenu: FC<IHeaderProps> = ({ isOpen }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.dropdownMenu, {
          [styles.open]: isOpen,
        })}
      >
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            {/*{MENU_ITEMS.map((item) => (*/}
            {/*  // TODO ADD LINK*/}
            {/*  <Link href={EMPTY_STRING} key={item.title} className={styles.listItem}>*/}
            {/*    {item.title}*/}
            {/*  </Link>*/}
            {/*))}*/}
          </ul>
        </div>
        <div className={classNames(styles.footer, { [styles.open]: isOpen })}>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
