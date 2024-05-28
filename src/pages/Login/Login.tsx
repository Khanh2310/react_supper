import { Icons } from '@/components/atoms/Icons';
import { Input } from '@/components/atoms/Input';
import { AuthLayout } from '@/layouts/AuthLayout';
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <AuthLayout>
      <div className="bg-white max-w-[450px] w-full rounded px-[30px] py-[30px]">
        <div className="text-xl mb-[30px]">Đăng Nhập</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            register={register}
            type="text"
            errorMessage={errors.email?.message}
            placeholder="Email/Số điện thoại/Tên đăng nhập"
          />

          <Input
            name="password"
            type="password"
            register={register}
            errorMessage={errors.password?.message}
            placeholder="Password"
            className="mb-[30px]"
          >
            <Icons
              className="w-5 h-5 cursor-pointer"
              open={showPassword}
              onClick={handleTogglePassword}
            />
          </Input>

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
          <div className="bg-[#dbdbdb] w-full h-[1px]" />
          <span className="uppercase text-[#ccc] text-xs px-4">hoặc</span>
          <div className="bg-[#dbdbdb] w-full h-[1px]" />
        </div>
        <div className="flex justify-between gap-3 mb-[30px]">
          <div className="flex items-center border justify-center w-full py-3 gap-1 cursor-pointer">
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
  );
};
