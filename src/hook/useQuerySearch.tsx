import { useForm } from 'react-hook-form';
import { useQueryConfig } from './useQueryConfig';
import { omit } from 'lodash';
import { SeacrchInput, SearchInputSchema } from '@/schema/filter/search.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { createSearchParams, useNavigate } from 'react-router-dom';

export const useQuerySearch = () => {
  const queryConfig = useQueryConfig();
  const { handleSubmit, register } = useForm<SeacrchInput>({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(SearchInputSchema),
  });

  const navigate = useNavigate();

  const onSubmitSearch = handleSubmit((data) => {
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.name,
          },
          ['order', 'sort_by']
        )
      : {
          ...queryConfig,
          name: data.name,
        };
    navigate({
      pathname: '/',
      search: createSearchParams(config).toString(),
    });
  });

  return {
    onSubmitSearch,
    register,
  };
};
