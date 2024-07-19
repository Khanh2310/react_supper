import { axiosInstance } from '@/config/axiosInstance';
import { ResponseApi } from '@/types';
import { PurchaseType } from '@/types/purchase/type';
const URL_PATH = 'purchases';

export const mutateAddToCart = (body: {
  product_id: string;
  buy_count: number;
}) => {
  return axiosInstance.post<ResponseApi<PurchaseType>>(
    `${URL_PATH}/add-to-cart`,
    body
  );
};

export const mutateBuyProducts = (
  body: { product_id: string; buy_count: number }[]
) => {
  return axiosInstance.post<ResponseApi<PurchaseType[]>>(
    `${URL_PATH}/buy-products`,
    body
  );
};

export const mutateUpdatePurchase = (body: {
  product_id: string;
  buy_count: number;
}) => {
  return axiosInstance.put<ResponseApi<PurchaseType>>(
    `${URL_PATH}/update-purchase`,
    body
  );
};

export const mutateDeletePurchase = (purchaseId: string[]) => {
  return axiosInstance.delete<ResponseApi<{ delete_count: number }>>(URL_PATH, {
    data: purchaseId,
  });
};
