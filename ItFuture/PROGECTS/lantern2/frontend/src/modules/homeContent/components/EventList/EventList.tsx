import { EventCard, PageLoader } from '@/common/components';
import { useQuery } from 'react-query';
import { getEventsList } from '@/common/api/services/event';
import { ContentLayout } from '@/common/layouts';

import { Event } from '@/common/types/Api';

import styles from './EventList.module.scss';

export const EventList = () => {
  const { data, isLoading, isError, error } = useQuery<Event[]>(
    ['events'],
    getEventsList,
  );

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    // TODO notify + redirect
    console.log('->  error');
  }
  return (
    <>
      <ContentLayout>
        <h1 className={styles.title}>/Події</h1>
        <div className={styles.eventWrapper}>
          {data?.map((event) => (
            <EventCard {...event} key={event.id} />
          ))}
        </div>
      </ContentLayout>
    </>
  );
};
