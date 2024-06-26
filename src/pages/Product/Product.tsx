import { Rating } from '@/components/molecules/Rating';
import { ProductType } from '@/types/product/type';
import { formatCurrency, formatNumberToSocialStyle } from '@/utils';
import { Link } from 'react-router-dom';

interface IProduct {
  product: ProductType;
}

export const Product = ({ product }: IProduct) => {
  return (
    <Link to="/">
      <div className="border border-gray-300  bg-white rounded-sm shadow hover:-translate-y-[1px] duration-100 transition-transform">
        <div className="relative w-full pt-[100%]">
          <img
            src={product.image}
            alt="product_image"
            className="absolute top-0 left-0 bg-white w-full h-full object-cover"
          />
        </div>
        <div className="p-2 overflow-hidden">
          <div className="min-h-[1.75rem] text-sm line-clamp-2">
            {product.category.name}
          </div>
          <div className="mt-3 flex items-center">
            <div className="text-orange truncate">
              <span className="text-xs">đ</span>
              <span className="text-sm">
                {formatCurrency(Number(product.price))}
              </span>
            </div>
            <div className="ml-1 line-through max-w-[50%] text-gray-800 truncate">
              <span className="text-xs">đ</span>
              <span className="text-sm">
                {formatCurrency(product.price_before_discount)}
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-start">
            <Rating rating={Number(product.rating)} />
            <div className="ml-2 text-xs">
              <span>Đã bán</span>
              <span className="ml-1">
                {formatNumberToSocialStyle(product.sold)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
