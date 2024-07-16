import { axiosInstance } from '@/config/axiosInstance';
import { ResponseApi } from '@/types';
import { omitBy, isUndefined } from 'lodash';

import {
  ProductListConfig,
  ProductListType,
  ProductType,
  QueryConfig,
} from '@/types/product/type';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useQueryParams } from './useQueryParams';

export const getProducts = (params: ProductListConfig) => {
  return axiosInstance.get<ResponseApi<ProductListType>>('products', {
    params,
  });
};

export const useQueryProducts = () => {
  const queryParams: QueryConfig = useQueryParams();

  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit,
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category,
    },
    isUndefined
  );

  const { data } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => getProducts(queryConfig as ProductListConfig),
    placeholderData: keepPreviousData,
    staleTime: 3 * 60 * 1000,
  });
  return data;
};

export const getProductsDetail = (id: string) => {
  return axiosInstance.get<ResponseApi<ProductType>>(`products/${id}`);
};
