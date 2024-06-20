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
  paginate: {
    page: number;
    limit: number;
    page_size: number;
  };
};

export type ProductListConfig = {
  page?: number;
  limit?: number;
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price';
  order?: 'asc' | 'desc';
  exclude?: string;
  rating_filter?: number;
  price_min?: number;
  price_max?: number;
  name?: string;
};
