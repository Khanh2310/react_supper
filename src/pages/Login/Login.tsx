import { Icons } from '@/components/atoms/Icons';
import { AuthLayout } from '@/layouts/RegisterLayout/AuthLayout';
import { facebookLogo, googleLogo } from '@/utils';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface IFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <>
      <AuthLayout>
        <div className="bg-white max-w-[450px] w-full  rounded px-[30px] py-[30px]">
          <div className="text-xl mb-[30px]">Đăng Nhập</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Email/Số điện thoại/Tên đăng nhập"
              className="border w-full p-3 outline-none mb-[30px]"
              type="text"
              {...register('email')}
            />
            <div className="relative">
              <input
                placeholder="Mật khẩu"
                className="border w-full p-3 outline-none mb-[30px]"
                type={`${showPassword ? 'text' : 'password'}`}
                {...register('password')}
              />
              <div className="absolute right-6 top-[45%] -translate-y-full select-none">
                <Icons
                  className="w-5 h-5 cursor-pointer"
                  open={showPassword}
                  onClick={handleTogglePassword}
                />
              </div>
            </div>

            <button className="bg-[#ee4d2d] uppercase text-white opacity-70 w-full py-[10px] rounded mb-[10px] outline-none">
              Đăng nhập
            </button>
          </form>
          <div className="flex items-center justify-between mb-[10px]">
            <Link to={'/forget-password'} className="text-sm text-[#0055AA]">
              Quên mật khẩu
            </Link>
            <Link to={'/SMS'} className="text-sm text-[#0055AA]">
              Đăng nhập với SMS
            </Link>
          </div>
          <div className="flex items-center mb-[14px]">
            <div className="bg-[#dbdbdb] w-full h-[1px]"></div>
            <span className="uppercase text-[#ccc] text-xs px-4">hoặc</span>
            <div className="bg-[#dbdbdb] w-full h-[1px]"></div>
          </div>
          <div className="flex justify-between gap-3 mb-[30px]">
            <div className="flex items-center border justify-center w-full ] py-3 gap-1 cursor-pointer">
              <img
                src={facebookLogo}
                alt="facebookLogo"
                className="w-[22px] h-[22px] "
              />
              <p>Facebook</p>
            </div>
            <div className="flex items-center border justify-center w-full cursor-pointer">
              <img
                src={googleLogo}
                alt="facebookLogo"
                className="w-[22px] h-[22px]"
              />
              <p>Google</p>
            </div>
          </div>

          <div className="text-center text-[#00000042]">
            Bạn mới biết đến Shopee?{' '}
            <Link to={'/register'} className="text-orange">
              Đăng ký
            </Link>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};
