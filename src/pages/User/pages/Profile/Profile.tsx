import { Input } from '@/components/atoms/Input';
import { avatarDefault } from '@/utils';

export const Profile = () => {
  return (
    <div className="rounded-sm bg-white px-2 md:px-7 pb-10 md:pb-20 shadow">
      <div className="border-b border-gray-200 py-6">
        <h1 className="text-lg font-medium capitalize text-gray-900">
          Hồ sơ của tôi
        </h1>
        <div className="mt-1 text-sm text-gray-700">
          Quản lý thông tin hồ sở để bảo mật tài khoản
        </div>
        <div className="mt-8 flex flex-col-reverse md:flex-row md:items-start">
          <form className="mt-6 flex-grow md:pr-12 md:mt-0">
            <div className="mt-6 flex flex-wrap">
              <div className="sm:w-[20%] truncate pt-2 text-right capitalize">
                Tên
              </div>
              <div className="sm:w-[80%] pl-5">
                <Input className="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm" />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="sm:w-[20%] truncate text-right capitalize">
                Email
              </div>
              <div className="sm:w-[80%] pl-5">
                <div className="text-gray-700">quoc***********@gmail.com</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap">
              <div className="w-[20%] truncate pt-2 text-right capitalize">
                Số điện thoại
              </div>
              <div className="w-[80%] pl-5">
                <Input className="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm" />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="sm:w-[20%] truncate pt-2 text-right capitalize">
                Địa chỉ
              </div>
              <div className="sm:w-[80%] pl-5">
                <Input className="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm" />
              </div>
            </div>

            <div className="flex flex-wrap justify-end">
              <div className="sm:w[20%] truncate pt-3 text-right capitalize">
                Ngày sinh
              </div>
              <div className="sm:w-[80%] pl-5">
                <div className="flex justify-between gap-2">
                  <select
                    name=""
                    className="h-10 w-[33%] rounded-sm border border-black/10 px-3"
                  >
                    <option disabled>Ngày</option>
                  </select>
                  <select
                    name=""
                    className="h-10 w-[33%] rounded-sm border border-black/10 px-3"
                  >
                    <option disabled>Tháng</option>
                  </select>
                  <select
                    name=""
                    className="h-10 w-[33%] rounded-sm border border-black/10 px-3"
                  >
                    <option disabled>Năm</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-center md:w-72 md:border-l md:border-l-gray-200">
            <div className="flex flex-col items-center">
              <div className="my-5 h-24 w-24">
                <img
                  src={avatarDefault}
                  alt="avatar_default"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <input type="file" accept=".jpg,.jpeg,.png" className="hidden" />
              <button className="flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm text-gray-600 shadow-sm">
                Chọn Ảnh
              </button>
              <div className="mt-3 text-gray-400">
                Dung lượng file tối đa 1 MB
              </div>
              <div>Định dạng: JPEG, .PNG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
