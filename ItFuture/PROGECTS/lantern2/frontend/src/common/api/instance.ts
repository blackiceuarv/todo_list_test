import { Api } from '@/common/types/Api';
import { API_BASE_URL } from '@/common/constants/config';

export const api = new Api({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

api.instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
