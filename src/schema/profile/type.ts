import { z } from 'zod';

export const profileSchema = z
  .object({
    name: z.string().max(160, 'Độ dài tối đa là 160 ký tự'),
    phone: z.string().max(20, 'Độ dài tối đa là 20 ký tự'),
    address: z.string().max(160, 'Độ dài tối đa là 160 ký tự'),
    date_of_birth: z.date().max(new Date(), 'Hãy chọn 1 ngày trong quá khứ'),
    avatar: z.string().max(1000, 'Độ dài tối đa 1000 ký tự'),
    password: z.string().min(1, 'Password là bắt buộc'),
    confirm_password: z.string().min(1, 'confirm_password là bắt buộc'),
    new_password: z.string().min(1, 'new_password là bắt buộc'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Nhập lại password không khớp',
    path: ['confirm_password'],
  });

export type profileSchemaInput = z.infer<typeof profileSchema>;
