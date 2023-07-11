import Waves from '@/common/assets/images/auth/waves.svg';
import Image from 'next/image';
import LoginImage from '@/common/assets/images/auth/login.png';

import styles from './AuthImageWrapper.module.scss';

export const AuthImageWrapper = () => {
  return (
    <>
      <div className={styles.backPicture}></div>
      <Waves className={styles.waves} />
      <Image
        className={styles.image}
        src={LoginImage}
        width={600}
        height={550}
        alt={'login image'}
      />
    </>
  );
};
