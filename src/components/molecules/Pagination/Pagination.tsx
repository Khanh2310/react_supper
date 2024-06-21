import React from 'react';
import classNames from 'classnames';
interface IPagination {
  currentPage: number;
  totalPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
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

export const Pagination = ({
  setCurrentPage,
  currentPage,
  totalPage,
}: IPagination) => {
  const RANGE = 2;
  const renderPagination = () => {
    let dotAfter = false;

    let dotBefore = false;

    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true;
        return (
          <button
            className="bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border"
            key={index}
          >
            ...
          </button>
        );
      }
      return null;
    };
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true;
        return (
          <button
            className="bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border"
            key={index}
          >
            ...
          </button>
        );
      }
      return null;
    };
    return Array(totalPage)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;
        if (
          currentPage <= RANGE * 2 + 1 &&
          pageNumber > currentPage + RANGE &&
          pageNumber < totalPage - RANGE + 1
        ) {
          return renderDotAfter(index);
        } else if (
          currentPage > RANGE * 2 + 1 &&
          currentPage < totalPage - RANGE * 2
        ) {
          if (pageNumber < currentPage - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index);
          } else if (
            pageNumber > currentPage + RANGE &&
            pageNumber < totalPage - RANGE + 1
          ) {
            return renderDotAfter(index);
          }
        } else if (
          currentPage >= totalPage - RANGE * 2 &&
          pageNumber > RANGE &&
          pageNumber < currentPage - RANGE
        ) {
          return renderDotBefore(index);
        }
        return (
          <button
            key={index}
            className={classNames(
              'bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border',
              {
                'border-cyan-500': currentPage === pageNumber,
                'border-s-transparent': currentPage !== pageNumber,
              }
            )}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      });
  };
  return (
    <div className="flex flex-wrap mt-6 justify-center">
      <button className="bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border">
        Prev
      </button>
      {renderPagination()}
      <button className="bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border">
        Next
      </button>
    </div>
  );
};
