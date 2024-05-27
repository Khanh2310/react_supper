import { AuthLayout } from '@/layouts/AuthLayout';
import { getRules } from '@/schema/rules';
import { facebookLogo, googleLogo } from '@/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface IProps {
  email: string;
  password: string;
  confirm_password: string;
}
export const Register = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<IProps>();

  const rules = getRules(getValues);

  const onSubmit: SubmitHandler<IProps> = (data) => console.log(data);
  return (
    <AuthLayout>
      <div className="bg-white max-w-[450px] w-full rounded px-[30px] py-[30px]">
        <div className="text-xl mb-[30px]">Đăng ký</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-[30px]">
            <input
              type="text"
              placeholder="Email/Số điện thoại/Tên đăng nhập"
              className="border w-full p-3 outline-none"
              {...register('email', { ...rules.email })}
            />
            <p className="mt-1 text-red-600 text-sm">{errors.email?.message}</p>
          </div>
          <div className="mb-[30px]">
            <input
              type="password"
              placeholder="Password"
              className="border w-full p-3 outline-none "
              {...register('password', { ...rules.password })}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.password?.message}
            </p>
          </div>
          <div className="mb-[30px]">
            <input
              type="password"
              placeholder="Confirm password"
              className="border w-full p-3 outline-none"
              {...register('confirm_password', { ...rules.confirm_password })}
            />
            <p className="mt-1 text-red-600 text-sm">
              {errors.confirm_password?.message}
            </p>
          </div>
          <button className="bg-[#ee4d2d] uppercase text-white opacity-70 w-full py-[10px] rounded mb-[30px]">
            Tiếp theo
          </button>
        </form>
        <div className="flex items-center mb-[14px]">
          <div className="bg-[#dbdbdb] w-full h-[1px]" />
          <span className="uppercase text-[#ccc] text-xs px-4">hoặc</span>
          <div className="bg-[#dbdbdb] w-full h-[1px]" />
        </div>
        <div className="flex justify-between gap-3 mb-[30px]">
          <div className="flex items-center border justify-center w-full py-3 gap-1">
            <img
              src={facebookLogo}
              alt="facebookLogo"
              className="w-[22px] h-[22px]"
            />
            <p>Facebook</p>
          </div>
          <div className="flex items-center border justify-center w-full">
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
