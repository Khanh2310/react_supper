import { axiosInstance } from '@/config/axiosInstance';
import { AuthResponse } from '@/types/auth/type';

export const registerAccount = (body: { email: string; password: string }) =>
  axiosInstance.post<AuthResponse>('/register', body);

export const login = (body: { email: string; password: string }) =>
  axiosInstance.post<AuthResponse>('/login', body);
