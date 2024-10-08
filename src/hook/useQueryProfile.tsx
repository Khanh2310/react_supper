import { axiosInstance } from '@/config/axiosInstance';
import { ResponseApi } from '@/types';
import { User } from '@/types/user/type';

interface IUpdateProfile
  extends Omit<User, '_id' | 'roles' | 'createdAt' | 'updatedAt' | 'email'> {
  password?: string;
  newPassword?: string;
}
export const getProfile = () => {
  return axiosInstance.get<ResponseApi<User>>('me');
};

export const updateProfile = (body: IUpdateProfile) => {
  return axiosInstance.put<ResponseApi<User>>('user', body);
};

export const uploadAvatar = (body: IUpdateProfile) => {
  return axiosInstance.post<ResponseApi<User>>('user/upload-avatar', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
