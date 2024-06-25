import { QueryConfig } from '@/types/product/type';
import classNames from 'classnames';
import { Link, createSearchParams } from 'react-router-dom';
interface IPagination {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queryConfig: QueryConfig;
  totalPage: number;
}

/*
    Với range = 2 áp dụng cho khoảng cách đầu, cuối và xung quanh current_page

    [1] 2 3 .. 19 20
    1 [2] 3 4 ... 19 20
    1 2 [3] 4 5 ... 19 20
    1 2 3 [4] 5 6 ... 19 20
    1 2 3 4 [5] 6 7 ... 19 20

    1 2 ... 4 5 [6] 7 8 ... 19 20

    1 2 ... 13 14 [15] 16 17 ... 19 20

    1 2 ... 14 15 [16] 17 18 19 20
    1 2 ... 15 16 [17] 18 19 20
    1 2 ... 16 17 [18] 19 20
    1 2 ... 17 18 [19] 20
    1 2 ... 18 19 [20]

*/

export const Pagination = ({ queryConfig, totalPage }: IPagination) => {
  const page = Number(queryConfig.page);
  const RANGE = 2;
  const renderPagination = () => {
    let dotAfter = false;

    let dotBefore = false;

    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true;
        return (
          <span
            className="bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border"
            key={index}
          >
            ...
          </span>
        );
      }
      return null;
    };
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true;
        return (
          <span
            className="bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border"
            key={index}
          >
            ...
          </span>
        );
      }
      return null;
    };
    return Array(totalPage)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;
        if (
          page <= RANGE * 2 + 1 &&
          pageNumber > page + RANGE &&
          pageNumber < totalPage - RANGE + 1
        ) {
          return renderDotAfter(index);
        } else if (page > RANGE * 2 + 1 && page < totalPage - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index);
          } else if (
            pageNumber > page + RANGE &&
            pageNumber < totalPage - RANGE + 1
          ) {
            return renderDotAfter(index);
          }
        } else if (
          page >= totalPage - RANGE * 2 &&
          pageNumber > RANGE &&
          pageNumber < page - RANGE
        ) {
          return renderDotBefore(index);
        }
        return (
          <Link
            to={{
              pathname: '/',
              search: createSearchParams({
                ...queryConfig,
                page: pageNumber.toString(),
              }).toString(),
            }}
            key={index}
            className={classNames(
              'bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border',
              {
                'border-cyan-500': page === pageNumber,
                'border-s-transparent': page !== pageNumber,
              }
            )}
          >
            {pageNumber}
          </Link>
        );
      });
  };

  return (
    <div className="flex flex-wrap mt-6 justify-center">
      {page === 1 ? (
        <span className="bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-not-allowed border">
          Prev
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
          className="bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border"
        >
          Prev
        </Link>
      )}
      {renderPagination()}
      {page === totalPage ? (
        <span className="bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-not-allowed border">
          Next
        </span>
      ) : (
        <Link
          to={{
            pathname: '/',
            search: createSearchParams({
              ...queryConfig,
              page: (page + 1).toString(),
            }).toString(),
          }}
          className="bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border"
        >
          Next
        </Link>
      )}
    </div>
  );
};
