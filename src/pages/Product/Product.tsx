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
              <span>{formatCurrency(Number(product.price))}</span>
            </div>
            <div className="ml-1 line-through max-w-[50%] text-gray-800 truncate">
              <span className="text-xs">đ</span>
              <span>{formatCurrency(product.price_before_discount)}</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-start">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-2/4 overflow-hidden">
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="0"
                    y="0"
                    className="fill-[#ffce3d] w-3 h-3"
                  >
                    <polygon
                      points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x="0"
                  y="0"
                  className="fill-current text-gray-300 w-3 h-3"
                >
                  <polygon
                    points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
            </div>
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
