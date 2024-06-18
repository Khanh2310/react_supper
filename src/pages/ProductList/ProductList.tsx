import { Product } from '../Product/Product';
import { Aside } from '@/components/molecules/Aside';
import { SortProductList } from '@/components/molecules/SortProductList';

export const ProductList = () => {
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
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <div className="col-span-1" key={index}>
                    <Product />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
