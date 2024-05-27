import { RegisterOptions, UseFormGetValues } from 'react-hook-form';

type Rules = {
  [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc',
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng',
    },
    minLength: {
      value: 1,
      message: 'Độ dài từ 5 - 160 ký tự',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc',
    },
    minLength: {
      value: 1,
      message: 'Độ dài mật khẩu từ 5 - 160 ký tự',
    },
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm Password là bắt buộc',
    },
    minLength: {
      value: 1,
      message: 'Độ dài mật khẩu từ 5 - 160 ký tự',
    },
    validate:
      typeof getValues === 'function'
        ? (value) =>
            value === getValues('password') || 'Nhập lại password không khớp'
        : undefined,
  },
});

// import { z } from 'zod';

// export const onlyEmailSchema = z.object({
//   email: z
//     .string()
//     .min(1)
//     .regex(/^\S+@\S+\.\S+$/, 'Email không đúng định dạng')
//     .email('Email là bắt buộc'),
// });
