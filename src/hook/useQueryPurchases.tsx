import { axiosInstance } from '@/config/axiosInstance';
import { ResponseApi } from '@/types';
import { PurchaseType, PurchaseListStatus } from '@/types/purchase/type';

export const getPurchases = async (params: { status: PurchaseListStatus }) => {
  return await axiosInstance.get<ResponseApi<PurchaseType[]>>('/purchases', {
    params,
  });
};
