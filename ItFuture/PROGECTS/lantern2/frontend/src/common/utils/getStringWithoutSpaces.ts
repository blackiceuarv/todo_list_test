import { EMPTY_STRING } from '@/common/constants';

export const getStringWithoutSpaces = (string = EMPTY_STRING) =>
  string.replace(/\s/g, EMPTY_STRING);
