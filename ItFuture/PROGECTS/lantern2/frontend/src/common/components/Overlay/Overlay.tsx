import React, { useRef, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Overlay.module.scss';

interface IOverlayProps {
  children?: ReactNode;
  className?: string;
  show?: boolean;
  [other: string]: any;
}

export const Overlay = ({ children, className }: IOverlayProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={classNames(styles.overlay, className)} ref={ref}>
      {children}
    </div>
  );
};
