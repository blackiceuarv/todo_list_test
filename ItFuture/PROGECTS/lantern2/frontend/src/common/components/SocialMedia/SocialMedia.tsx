import React, { FC } from 'react';
import {ICON_NAMES, SOCIAL_MEDIA} from '@/common/constants';
import classNames from 'classnames';
import Link from 'next/link';
import Icon from '@/common/components/Icon/Icon';
import styles from './SocialMedia.module.scss';

export interface ISocialMediaProps {
  className?: string;
}

export const SocialMedia: FC<ISocialMediaProps> = ({ className }) => {
  const socialMediaItems = [
    { component: <Icon icon={ICON_NAMES.TELEGRAM} />, route: SOCIAL_MEDIA.TELEGRAM },
    { component: <Icon icon={ICON_NAMES.YOUTUBE} />, route: SOCIAL_MEDIA.YOUTUBE },
    { component: <Icon icon={ICON_NAMES.FACEBOOK} />, route: SOCIAL_MEDIA.TIKTOK },
  ];

  return (
    <div className={classNames(styles.socialMediaWrapper, className)}>
      {socialMediaItems.map(({ component, route }) => (
        <Link href={route} key={route}>
          {component}
        </Link>
      ))}
    </div>
  );
};
