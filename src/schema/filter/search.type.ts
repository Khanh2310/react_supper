import { z } from 'zod';

export const SearchInputSchema = z.object({
  name: z.string().min(1, 'Tên sản phẩm là bắt buộc'),
});

export type SeacrchInput = z.infer<typeof SearchInputSchema>;
