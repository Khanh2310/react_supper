export const SortProductList = () => {
  return (
    <div className="bg-gray-300/40 py-4 px-7 flex justify-between items-center">
      <div className="flex items-center flex-wrap justify-between gap-2">
        <div className="flex items-center flex-wrap gap-2">
          <div className="t">Sắp xếp theo</div>
          <button className="h-8 px-4 capitalize rounded-sm bg-orange text-white text-sm hover:bg-orange/80 text-center ">
            Phổ biến
          </button>
          <button className="h-8 px-4 capitalize bg-white rounded-sm text-gray-700 hover:text-white text-sm hover:bg-orange text-center ">
            Mới nhất
          </button>
          <button className="h-8 px-4 capitalize bg-white rounded-sm  text-gray-700 hover:text-white text-sm hover:bg-orange text-center ">
            Bán chạy
          </button>
          <div className="relative group">
            <div className="flex items-center justify-between  bg-white px-4 h-8 min-w-[205px] cursor-pointer rounded-sm hover:bg-gray-50/100">
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
        <div className="">
          <span className="text-orange">1</span>
          <span className="">/9</span>
        </div>
        <div className="ml-5">
          <button className="px-3 h-8 rounded-tl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed">
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
          <button className="px-3 h-8 rounded-tl-sm bg-slate-400">
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
