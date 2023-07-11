import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Moment from 'react-moment';
import 'moment/locale/uk';
import classNames from 'classnames';
import { DATE_FORMATS } from '@/common/constants/date';
import { Event } from '@/common/types/Api';
import { ICON_NAMES } from '@/common/constants';

import { myLoader } from '@/common/utils/myLoader';
import { Button } from '@/common/components/Button/Button';
import Icon from '@/common/components/Icon/Icon';

import styles from './EventCard.module.scss';

export const EventCard: FC<Event> = ({
  name,
  description,
  image,
  start_time,
  price,
  location,
  slug,
  charity,
  address,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setShowDetails(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      onClick={handleClick}
      ref={cardRef}
      className={classNames(styles.eventCard, { [styles.show]: showDetails })}
    >
      {image && (
        <Image
          className={styles.image}
          loader={() => myLoader(image)}
          src={myLoader(image)}
          width={332}
          height={473}
          alt={name}
        />
      )}
      {charity && <Icon icon={ICON_NAMES.HEART} className={styles.charityIcon} />}

      <div className={styles.previewInfo}>
        <p>{name.toUpperCase()}</p>
        <p>
          <Moment
            format={DATE_FORMATS.eventCardPreviewInfo}
            date={!!start_time ? start_time : ''}
          />
        </p>
      </div>

      <div className={styles.detailedInfo}>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>{description}</p>
        </div>

        <div>
          <div className={styles.heart_chat_block}>
            <Icon icon={ICON_NAMES.HEART_EMPTY} />
            <Icon icon={ICON_NAMES.CHAT_EMPTY} />
          </div>
          <p className={styles.date}>
            <Icon icon={ICON_NAMES.CALENDAR} />
            <Moment
              date={!!start_time ? start_time : ''}
              format={DATE_FORMATS.eventCardDetailedInfo}
            />
          </p>
          <p className={styles.prise}>
            <Icon icon={ICON_NAMES.MONEY} />
            {!!price ? `${price} грн` : 'Вхід вільний'}
          </p>

          <div className={styles.location}>
            <Icon icon={ICON_NAMES.LOCATION} />
            <p>
              <span>{address}</span>
              <span>{location}</span>
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <Link href={`/event/${slug}`}>
              <Button variant={'outline'}>Перейти</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
