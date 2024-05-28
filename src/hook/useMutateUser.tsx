import http from '@/config/axiosInstance';
import { AuthResponse } from '@/types/auth/type';

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>('/register', body);
