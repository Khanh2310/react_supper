export type ProductType = {
  _id: string;
  images: string[];
  price: string;
  rating: string;
  price_before_discount: number;
  quantity: number;
  sold: number;
  view: number;
  name: string;
  description: string;
  category: {
    _id: string;
    name: string;
  };
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductListType = {
  products: ProductType[];
  pagination: {
    page: number;
    limit: number;
    page_size: number;
  };
};

export type ProductListConfig = {
  page?: number | string;
  limit?: number | string;
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price';
  order?: 'asc' | 'desc';
  exclude?: string;
  rating_filter?: number | string;
  price_min?: number | string;
  price_max?: number | string;
  name?: string;
};

export type QueryConfig = {
  [key in keyof ProductListConfig]: string;
};
