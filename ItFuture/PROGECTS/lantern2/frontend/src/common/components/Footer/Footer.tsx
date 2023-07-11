import Image from 'next/image';
import Link from 'next/link';
import { CONTACTS_FOOTER } from '@/common/constants/contactsFooter';
import { MAP_LINK } from '@/common/constants/mapLink';
import { SocialMedia } from '@/common/components/SocialMedia/SocialMedia';
import { FeedBackForm } from '@/common/components/Footer/FeedBackForm/FeedBackForm';
import mapImg from '../../assets/images/map.png';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.feedBackFormWrapper}>
        <FeedBackForm />
      </div>
      <h2>Let’s connect!</h2>
      <div className={styles.content}>
        <div className={styles.infoBlock}>
          <Link href={MAP_LINK.FOOTER} className={styles.mapLink}>
            <Image src={mapImg} alt={'map'} className={styles.map} />
          </Link>
          <div className={styles.contacts}>
            <p>
              <span>{CONTACTS_FOOTER.ADDRESS}</span>
              <span>{CONTACTS_FOOTER.EMAIL}</span>
              <span>{CONTACTS_FOOTER.PHONE}</span>
            </p>
            <SocialMedia className={styles.socialMedia} />
          </div>
        </div>
      </div>
    </footer>
  );
};
