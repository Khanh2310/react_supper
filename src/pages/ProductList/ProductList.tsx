import { Pagination } from '@/components/molecules/Pagination';
import { Product } from '../Product/Product';
import { Aside } from '@/components/molecules/Aside';
import { SortProductList } from '@/components/molecules/SortProductList';
import { useQueryProducts } from '@/hook/useQueryProduct';
import { useQueryCategory } from '@/hook/useQueryCategory';
import { useQueryConfig } from '@/hook/useQueryConfig';

export const ProductList = () => {
  const data = useQueryProducts();

  const categories = useQueryCategory();

  const queryConfig = useQueryConfig();
  return (
    <div className="bg-gray-200 py-6">
      <div className="screen-max-width">
        {data && (
          <div className="flex justify-between gap-6">
            <div className="w-full max-w-[300px]">
              <Aside
                categories={categories?.data.data || []}
                queryConfig={queryConfig}
              />
            </div>
            <div className="flex-1">
              <SortProductList
                queryConfig={queryConfig}
                totalPage={data.data.data?.pagination.page_size}
              />
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {data.data.data?.products.map((products) => (
                  <div className="col-span-1" key={products._id}>
                    <Product product={products} />
                  </div>
                ))}
              </div>
              <Pagination
                queryConfig={queryConfig}
                totalPage={data.data.data?.pagination.page_size}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
