import { Icons } from '@/components/atoms/Icons';
import { Input } from '@/components/atoms/Input';
import { AuthLayout } from '@/layouts/RegisterLayout/AuthLayout';
import { facebookLogo, googleLogo } from '@/utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <AuthLayout>
      <div className="bg-white max-w-[450px] w-full  rounded px-[30px] py-[30px]">
        <div className="text-xl mb-[30px]">Đăng Nhập</div>
        <form action="">
          <Input
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            className="mb-[30px]"
            type="text"
          />
          <Input
            placeholder="Mật khẩu"
            className="mb-[30px]"
            type={showPassword ? 'text' : 'password'}
          />
          <Icons
            className="w-5 h-5 "
            open={showPassword}
            onClick={handleTogglePassword}
          />
          <button className="bg-[#ee4d2d] uppercase text-white opacity-70 w-full py-[10px] rounded mb-[30px]">
            Tiếp theo
          </button>
        </form>
        <div className="flex items-center mb-[14px]">
          <div className="bg-[#dbdbdb] w-full h-[1px]"></div>
          <span className="uppercase text-[#ccc] text-xs px-4">hoặc</span>
          <div className="bg-[#dbdbdb] w-full h-[1px]"></div>
        </div>
        <div className="flex justify-between gap-3 mb-[30px]">
          <div className="flex items-center border justify-center w-full ] py-3 gap-1">
            <img
              src={facebookLogo}
              alt="facebookLogo"
              className="w-[22px] h-[22px] "
            />
            <p>Facebook</p>
          </div>
          <div className="flex items-center border justify-center w-full ">
            <img
              src={googleLogo}
              alt="facebookLogo"
              className="w-[22px] h-[22px]"
            />
            <p>Google</p>
          </div>
        </div>
        <div className="text-center mb-[30px]">
          Bằng việc đăng kí, bạn đã đồng ý với Shopee về <br />
          <span className="text-orange">Điều khoản dịch vụ</span> &
          <span className="text-orange">Chính sách bảo mật</span>
        </div>
        <div className="text-center text-[#00000042]">
          Bạn đã có tài khoản?{' '}
          <Link to={'/login'} className="text-orange">
            Đăng nhập
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
