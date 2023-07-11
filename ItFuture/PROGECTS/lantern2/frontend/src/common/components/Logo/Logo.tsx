import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './Logo.module.scss';

interface ILogoProps {
  className?: string;
}

export const Logo: FC<ILogoProps> = ({ className }) => (
  <Link href='/' className={classNames(styles.logo, className)}>
    <Image src='/logo.svg' alt='logo' priority={true} width={50} height={50} />
  </Link>
);
