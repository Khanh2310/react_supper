import { axiosInstance } from '@/config/axiosInstance';
import { ResponseApi } from '@/types';
import { PurchaseType, PurchaseListStatus } from '@/types/purchase/type';
import { useQuery } from '@tanstack/react-query';

const getPurchases = async (params: { status: PurchaseListStatus }) => {
  return await axiosInstance.get<ResponseApi<PurchaseType[]>>('/purchases', {
    params,
  });
};

export const useQueryPurchase = () => {
  const { data } = useQuery({
    queryKey: ['purchases'],
    queryFn: () => getPurchases,
  });
  return data;
};
