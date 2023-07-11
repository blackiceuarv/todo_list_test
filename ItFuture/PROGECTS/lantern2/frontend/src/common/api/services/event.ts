import { EventsListData } from '@/common/types/Api';
import { fetchData } from '@/common/api/fetchData';
import { api } from '@/common/api/instance';

export const getEventsList = async (): Promise<EventsListData> => {
  const request = api.events.eventsList();
  return fetchData<EventsListData>(request);
};

export const getEvent = async (slug: string): Promise<EventsListData> => {
  const request = api.events.eventsRead(slug);
  return fetchData<EventsListData>(request);
};
