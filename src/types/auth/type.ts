import axios, { AxiosError, HttpStatusCode } from 'axios';
import { ResponseApi } from '..';
import { User } from '../user/type';

export type AuthResponse = ResponseApi<{
  access_token: string;
  expires: string;
  user: User;
}>;

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}

export function isAxiosUnprocessableEntityError<FormError>(
  error: unknown
): error is AxiosError<FormError> {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.UnprocessableEntity
  );
}
