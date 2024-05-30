import { Input } from '@/components/atoms/Input';
import { registerAccount } from '@/hook/useMutateUser';
import { AuthLayout } from '@/layouts/AuthLayout';
import {
  RegistrationInput,
  RegistrationInputSchema,
} from '@/schema/registration/type';
import { ResponseApi } from '@/types';
import { isAxiosUnprocessableEntityError } from '@/types/auth/type';
import { facebookLogo, googleLogo } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { omit } from 'lodash';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const Register = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<RegistrationInput>({
    resolver: zodResolver(RegistrationInputSchema),
  });

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<RegistrationInput, 'confirm_password'>) =>
      registerAccount(body),
  });

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password']);
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        if (
          isAxiosUnprocessableEntityError<
            ResponseApi<Omit<RegistrationInput, 'confirm_password'>>
          >(error)
        ) {
          const formError = error.response?.data.data;
          if (formError?.email) {
            setError('email', {
              message: formError.email,
              type: 'Server',
            });
          }
          if (formError?.password) {
            setError('password', {
              message: formError.password,
              type: 'Server',
            });
          }
        }
      },
    });
  });
  return (
    <AuthLayout>
      <div className="bg-white max-w-[450px] w-full rounded px-[30px] py-[30px]">
        <div className="text-xl mb-[30px]">Đăng ký</div>
        <form onSubmit={onSubmit}>
          <Input
            name="email"
            register={register}
            type="text"
            errorMessage={errors.email?.message}
            placeholder="Email/Số điện thoại/Tên đăng nhập"
          />

          <Input
            name="password"
            register={register}
            type="password"
            errorMessage={errors.password?.message}
            placeholder="Password"
          />
          <Input
            name="confirm_password"
            register={register}
            type="password"
            errorMessage={errors.confirm_password?.message}
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="bg-[#ee4d2d] uppercase text-white opacity-70 w-full py-[10px] rounded mb-[30px]"
          >
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
