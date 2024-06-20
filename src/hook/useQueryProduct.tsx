import { axiosInstance } from '@/config/axiosInstance';
import { ResponseApi } from '@/types';
import {
  ProductListConfig,
  ProductListType,
  ProductType,
} from '@/types/product/type';
import { useQuery } from '@tanstack/react-query';
import { useQueryParams } from './useQueryParams';

const getProducts = (params: ProductListConfig) => {
  return axiosInstance.get<ResponseApi<ProductListType>>('products', {
    params,
  });
};

export const useQueryProducts = () => {
  const queryParams = useQueryParams();
  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => getProducts(queryParams),
  });
  return data;
};

export const getProductsDetail = (id: string) => {
  return axiosInstance.get<ResponseApi<ProductType>>(`products/${id}`);
};
