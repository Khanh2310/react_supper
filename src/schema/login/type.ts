import { z } from 'zod';

export const LoginInputSchema = z.object({
  email: z
    .string()
    .min(1, 'Email là bắt buộc')
    .email('Email không đúng định dạng'),
  password: z.string().min(1, 'Password là bắt buộc'),
});

export type LoginInput = z.infer<typeof LoginInputSchema>;
