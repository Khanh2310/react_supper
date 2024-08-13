import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setProfile,
  setUserToLocalStorage,
} from '@/hook/useQueryUser';
import axios, { AxiosError, HttpStatusCode } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
let accessToken: string;

accessToken = getUserFromLocalStorage();

axiosInstance.interceptors.response.use(
  (response) => {
    const { url } = response.config;
    const data = response.data;
    if (url === '/login' || url === '/register') {
      accessToken = data.data?.access_token;
      setUserToLocalStorage(accessToken);
      setProfile(data.data.user);
    } else if (url === '/logout') {
      accessToken = '';
      removeUserFromLocalStorage();
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any | undefined = error.response?.data;
      const message = data.message || error.message;
      toast.error(message);
    }
    if (error.response?.status === HttpStatusCode.Unauthorized) {
      removeUserFromLocalStorage();
      window.location.reload;
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    if (accessToken && config.headers) {
      config.headers.authorization = accessToken;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
