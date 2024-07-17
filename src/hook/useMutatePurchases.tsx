import { axiosInstance } from '@/config/axiosInstance';
import { ResponseApi } from '@/types';
import { PurchaseType } from '@/types/purchase/type';

export const mutateAddToCart = (body: {
  product_id: string;
  buy_count: number;
}) => {
  return axiosInstance.post<ResponseApi<PurchaseType>>(
    'purchases/add-to-cart',
    body
  );
};
