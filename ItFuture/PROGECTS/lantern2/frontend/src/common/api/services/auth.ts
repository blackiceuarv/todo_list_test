import {
  AuthJwtCreateCreateData,
  AuthUsersCreateData,
  TokenObtainPair,
  UserCreate,
} from '@/common/types/Api';
import { fetchData } from '@/common/api/fetchData';
import { api } from '@/common/api/instance';

export const authUsersCreate = async (data: UserCreate): Promise<AuthUsersCreateData> => {
  const request = api.auth.authUsersCreate(data);
  return fetchData<AuthUsersCreateData>(request);
};

export const authJwtCreate = async (
  data: TokenObtainPair,
): Promise<AuthJwtCreateCreateData> => {
  const request = api.auth.authJwtCreateCreate(data);
  return fetchData<AuthJwtCreateCreateData>(request);
};
