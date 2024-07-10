import { getProductsDetail } from '@/hook/useQueryProduct';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const { id } = useParams();

  const { data: listDataProductDetail } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductsDetail(id as string),
  });

  const productDetail = listDataProductDetail?.data?.data;
  if (!productDetail) return null;
  return (
    <div className="bg-gray-200 py-6">
      <div className="bg-white p-4 shadow">
        <div className="screen-max-width">
          <div className="flex gap-9">
            <div className="max-[500px]">
              <div className="relative w-full pt-[100%] shadow">
                <img
                  src={productDetail.image}
                  alt={productDetail.name}
                  className="absolute top-0 left-0 h-full w-full bg-white object-cover"
                />
              </div>
              <div className="relative mt-4 grid grid-cols-5 gap-1">
                <button className="absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="max-[700px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
