import { Button } from '@/components/atoms/Button';
import { iconStart } from '@/utils';
import { Link } from 'react-router-dom';

export const Aside = () => {
  return (
    <div className="py-4">
      <Link to="/" className="flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 mr-3 fill-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        Tất cả danh mục
      </Link>
      <div className="bg-gray-300 h-[1px] my-4" />
      <ul>
        <li className="py-2 pl-2">
          <Link
            to="/"
            className="relative px-2 text-orange font-semibold text-sm"
          >
            <svg
              viewBox="0 0 4 7"
              className="fill-orange h-2 w-2 absolute top-1 left-[-10px]"
            >
              <polygon points="4 3.5 0 0 0 7" />
            </svg>
            Thời trang nam
          </Link>
        </li>
        <li className="py-2 pl-2">
          <Link
            to="/"
            className="relative px-2 text-orange font-semibold text-sm"
          >
            <svg
              viewBox="0 0 4 7"
              className="fill-orange h-2 w-2 absolute top-1 left-[-10px]"
            >
              <polygon points="4 3.5 0 0 0 7" />
            </svg>
            Điện thoại
          </Link>
        </li>
      </ul>
      <Link to="/" className="flex items-center font-bold mt-4 uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-3 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
          />
        </svg>
        Bộ lọc tìm kiếm
      </Link>
      <div className="bg-gray-300 h-[1px] my-4" />
      <div className="my-5">
        <div className="Khoảng giá" />
        <form>
          <div className="flex items-center justify-center">
            <input
              type="text"
              name="from"
              maxLength={13}
              placeholder="đ TỪ"
              className="p-2 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
            />
            <span className="w-10 h-[1px] bg-gray-400 mx-4" />
            <input
              type="text"
              name="from"
              placeholder="đ ĐẾN"
              maxLength={13}
              className="p-2 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
            />
          </div>
          <Button className="w-full p-2 uppercase bg-orange text-white text-sm hover:bg-orange/80 mt-[30px] rounded-sm">
            Áp dụng
          </Button>
        </form>
      </div>
      <div className="bg-gray-300 h-[1px] my-4" />
      <div className="text-sm">Đánh giá</div>
      <ul className="py-3">
        <li className="py-1 pl-2">
          <Link to="/" className="flex items-center text-sm">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <img
                    src={iconStart}
                    alt="iconStart"
                    className="object-cover w-3 h-3"
                  />
                </div>
              ))}
            <span className="pl-2">trở lên</span>
          </Link>
        </li>
      </ul>
      <div className="bg-gray-300 h-[1px] my-4" />
      <Button className="w-full p-2 uppercase bg-orange text-white text-sm hover:bg-orange/80 rounded-sm">
        Xóa tất cả
      </Button>
    </div>
  );
};