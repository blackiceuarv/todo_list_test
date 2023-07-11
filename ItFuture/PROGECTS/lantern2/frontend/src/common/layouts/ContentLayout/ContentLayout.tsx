import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './ContentLayout.module.scss';

interface IContentLayoutProps {
  children: ReactNode;
  className?: string;
}

export const ContentLayout: FC<IContentLayoutProps> = ({ children, className }) => {
  return (
    <>
      <div className={classNames(styles.contentWrapper, className)}>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};
