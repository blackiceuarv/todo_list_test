import { FC } from 'react';
import { Button } from '@/common/components';
import Icon from '@/common/components/Icon/Icon';

import styles from '@/modules/auth/components/AuthCard/AuthForm/AuthForm.module.scss';
import {ICON_NAMES} from "@/common/constants";

interface IAuthSocialProps {
  buttonTitle: string;
  subTitle: string;
  buttonLabel: string;
  handleFormSwitch: () => void;
}

export const AuthSocial: FC<IAuthSocialProps> = ({
  buttonTitle,
  subTitle,
  buttonLabel,
  handleFormSwitch,
}) => {
  return (
    <>
      <Button type='submit' className={styles.buttonSubmit}>
        {buttonTitle}
      </Button>
      <div className={styles.help}>
        <span className={styles.subTitle}>{subTitle}</span>
        <span className={styles.link} onClick={handleFormSwitch}>
          {buttonLabel}
        </span>
      </div>
      <div className={styles.variant}>
        <hr />
        <span>або</span>
        <hr />
      </div>
      <div>
        <Button className={styles.socialButton}>
          <span className={styles.socialIcon}>
          <Icon icon={ICON_NAMES.GOOGLE}/>
          </span>
          <span>Увійти через Google</span>
        </Button>
      </div>
    </>
  );
};
