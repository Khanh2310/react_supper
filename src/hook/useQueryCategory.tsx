import { axiosInstance } from '@/config/axiosInstance';
import { ResponseApi } from '@/types';
import { CategoryType } from '@/types/category/type';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const getCategory = () => {
  return axiosInstance.get<ResponseApi<CategoryType[]>>('categories');
};

export const useQueryCategory = () => {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategory(),
    placeholderData: keepPreviousData,
  });
  return data;
};
