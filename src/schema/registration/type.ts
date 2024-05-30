import { z } from 'zod';

export const RegistrationInputSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email là bắt buộc')
      .email('Email không đúng định dạng'),
    password: z.string().min(1, 'Password là bắt buộc'),
    confirm_password: z.string().min(1, 'confirm_password là bắt buộc'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Nhập lại password không khớp',
    path: ['confirm_password'],
  });

export type RegistrationInput = z.infer<typeof RegistrationInputSchema>;
