import { EMPTY_SPACE } from '@/common/constants/initialValue';

export const trim = (value: string) => {
  if (value && value.includes(EMPTY_SPACE)) {
    return value.trim();
  }

  return value.replace(/\s\s+/g, EMPTY_SPACE);
};
