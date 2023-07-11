import { AxiosError } from 'axios';

interface ServerResponseData {
  message: string;
}

export const fetchData = async <T>(request: any): Promise<T> => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ServerResponseData>;
    throw new Error(
      axiosError.response?.data.message || 'An error occurred while fetching the data',
    );
  }
};
