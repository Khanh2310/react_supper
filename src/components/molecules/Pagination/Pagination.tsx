import React from 'react';
import classNames from 'classnames';
interface IPagination {
  currentPage: number;
  totalPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
export const Pagination = ({
  setCurrentPage,
  currentPage,
  totalPage,
}: IPagination) => {
  const RANGE = 2;
  const renderPagination = () => {
    let dotAfter = false;
    return Array(totalPage)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;
        if (
          currentPage <= RANGE * 2 + 1 &&
          pageNumber > currentPage + RANGE &&
          pageNumber < totalPage - RANGE + 1
        ) {
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
