import { Pagination } from '@/components/molecules/Pagination';
import { Product } from '../Product/Product';
import { Aside } from '@/components/molecules/Aside';
import { SortProductList } from '@/components/molecules/SortProductList';
import { useQueryProducts } from '@/hook/useQueryProduct';
import { ProductType } from '@/types/product/type';
import { useState } from 'react';

export const ProductList = () => {
  const data = useQueryProducts();
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div className="bg-gray-200 py-6">
      <div className="screen-max-width">
        <div className="flex justify-between gap-6">
          <div className="w-full max-w-[300px]">
            <Aside />
          </div>
          <div className="flex-1">
            <SortProductList />
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              {data &&
                data.data.data.products.map((products: ProductType) => (
                  <div className="col-span-1" key={products._id}>
                    <Product product={products} />
                  </div>
                ))}
            </div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPage={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
