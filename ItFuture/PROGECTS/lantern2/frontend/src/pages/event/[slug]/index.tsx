import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getEvent } from '@/common/api/services/event';

export default function EventDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // TODO Fix API
  return <h1>{slug}</h1>;
}
