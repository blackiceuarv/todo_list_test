import styles from './HomeContent.module.scss';
import { EventList } from '@/modules/homeContent/components/EventList/EventList';
import { Slider } from '@/common/components/Slider/Slider';

export const HomeContent = () => {
  return (
    <>
      <Slider />
      <EventList />
    </>
  );
};
