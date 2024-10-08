import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().max(160, 'Độ dài tối đa là 160 ký tự'),
  phone: z.string().max(20, 'Độ dài tối đa là 20 ký tự'),
  address: z.string().max(160, 'Độ dài tối đa là 160 ký tự'),
  date_of_birth: z.date().max(new Date(), 'Hãy chọn 1 ngày trong quá khứ'),
  avatar: z.string().max(1000, 'Độ dài tối đa 1000 ký tự'),
});

export type profileSchemaInput = z.infer<typeof profileSchema>;
