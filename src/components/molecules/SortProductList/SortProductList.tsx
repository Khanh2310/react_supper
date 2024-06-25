import { ProductListConfig, QueryConfig } from '@/types/product/type';
import classNames from 'classnames';
import { createSearchParams, useNavigate } from 'react-router-dom';
interface IProps {
  queryConfig: QueryConfig;
  totalPage: number;
}
export const SortProductList = ({ queryConfig, totalPage }: IProps) => {
  const { sort_by = 'createdAt' } = queryConfig;
  console.log(totalPage);
  const isActive = (
    sortByValue: Exclude<ProductListConfig['sort_by'], undefined>
  ) => {
    return sort_by === sortByValue;
  };

  const navigate = useNavigate();

  const handleSort = (
    sortByValue: Exclude<ProductListConfig['sort_by'], undefined>
  ) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortByValue,
      }).toString(),
    });
  };
  return (
    <div className="bg-gray-300/40 py-4 px-7 flex justify-between items-center">
      <div className="flex items-center flex-wrap justify-between gap-2">
        <div className="flex items-center flex-wrap gap-[10px]">
          <div>Sắp xếp theo</div>
          <button
            className={classNames(
              'h-8 px-4 capitalize rounded-sm text-sm text-center',
              {
                'bg-orange text-white hover:bg-orange/80': isActive('view'),
                'bg-white text-black hover:bg-slate-100': !isActive('view'),
              }
            )}
            onClick={() => handleSort('view')}
          >
            Phổ biến
          </button>
          <button
            className={classNames(
              'h-8 px-4 capitalize rounded-sm text-sm text-center',
              {
                'bg-orange text-white hover:bg-orange/80':
                  isActive('createdAt'),
                'bg-white text-black hover:bg-slate-100':
                  !isActive('createdAt'),
              }
            )}
            onClick={() => handleSort('createdAt')}
          >
            Mới nhất
          </button>
          <button
            className={classNames(
              'h-8 px-4 capitalize rounded-sm text-sm text-center',
              {
                'bg-orange text-white hover:bg-orange/80': isActive('sold'),
                'bg-white text-black hover:bg-slate-100': !isActive('sold'),
              }
            )}
            onClick={() => handleSort('sold')}
          >
            Bán chạy
          </button>
          <div className="relative group">
            <div className="flex items-center justify-between bg-white px-4 h-8 min-w-[205px] cursor-pointer rounded-sm hover:bg-gray-50/100">
              <a href="/" className="text-sm font-medium text-gray-700">
                Giá
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <a
                href="/"
                className="block text-sm my-2 py-1 text-gray-700 hover:text-orange"
              >
                Giá: Thấp đến Cao
              </a>
              <a
                href="/"
                className="block text-sm mb-2 py-1 text-gray-700 hover:text-orange"
              >
                Giá: Cao đến Thấp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <span className="text-orange">1</span>
          <span className="">/9</span>
        </div>
        <div className="ml-5">
          <button className="px-3 h-8 rounded-tl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="px-3 h-8 rounded-tl-sm bg-transparent shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
