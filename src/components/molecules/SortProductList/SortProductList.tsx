import { ProductListConfig, QueryConfig } from '@/types/product/type';
import classNames from 'classnames';
import { omit } from 'lodash';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
interface IProps {
  queryConfig: QueryConfig;
  totalPage: number;
}
export const SortProductList = ({ queryConfig, totalPage }: IProps) => {
  const { sort_by = 'createdAt', order = 'desc' } = queryConfig;
  const page = Number(queryConfig.page);
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
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByValue,
          },
          ['order']
        )
      ).toString(),
    });
  };

  const handlePriceOrder = (
    orderValue: Exclude<ProductListConfig['order'], undefined>
  ) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        ...queryConfig,
        sort_by: 'price',
        order: orderValue,
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

          <select
            className={classNames(
              'h-8 px-4  text-left text-sm capitalize outline-none min-w-[205px]',
              {
                'bg-orange text-white hover:bg-orange/80': isActive('price'),
                'bg-white text-black ': !isActive('price'),
              }
            )}
            value={order || ''}
            onChange={(e) =>
              handlePriceOrder(
                e.target.value as Exclude<ProductListConfig['order'], undefined>
              )
            }
          >
            <option value="" disabled className="bg-white text-black">
              {' '}
              Giá
            </option>
            <option value="asc" className="bg-white text-black">
              {' '}
              Giá: Thấp đến cao
            </option>
            <option value="desc" className="bg-white text-black">
              {' '}
              Giá: Cao đến thấp
            </option>
          </select>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <span className="text-orange">{page}</span>
          <span className="">/{totalPage}</span>
        </div>
        <div className="ml-5 flex">
          {page === 1 ? (
            <span className="px-3 h-8 rounded-tl-sm bg-white/60 hover:bg-slate-100 shadow flex items-center cursor-not-allowed">
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
            </span>
          ) : (
            <Link
              to={{
                pathname: '/',
                search: createSearchParams({
                  ...queryConfig,
                  page: (page - 1).toString(),
                }).toString(),
              }}
              className="px-3 h-8 rounded-tl-sm bg-white/60 hover:bg-slate-100 shadow flex items-center"
            >
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
            </Link>
          )}

          {page === totalPage ? (
            <Link
              to="/"
              className="px-3 h-8 rounded-tl-sm bg-transparent shadow flex items-center cursor-not-allowed"
            >
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
            </Link>
          ) : (
            <Link
              to={{
                pathname: '/',
                search: createSearchParams({
                  ...queryConfig,
                  page: (page + 1).toString(),
                }).toString(),
              }}
              className="px-3 h-8 rounded-tl-sm bg-transparent shadow flex items-center"
            >
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
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
