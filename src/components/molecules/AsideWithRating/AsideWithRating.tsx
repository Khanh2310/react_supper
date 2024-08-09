import { QueryConfig } from '@/types/product/type';
import { createSearchParams, useNavigate } from 'react-router-dom';

/*
  index 0: Có 5 cái màu vàng tương ứng từ indexStar 0 - 4 đều màu vàng
  index 1: Có 4 cái màu vàng tương ứng từ indexStar 0 - 3 đều màu vàng
  index 2: Có 3 cái màu vàng tương ứng từ indexStar 0 - 2 đều màu vàng
  index 3: Có 2 cái màu vàng tương ứng từ indexStar 0 - 1 đều màu vàng
  index 4: Có 1 cái màu vàng tương ứng từ indexStar 0  đều màu vàng


  Chúng ta nhận ra là indexStar < 5 - index => màu vàng
   */

interface IProps {
  queryConfig: QueryConfig;
}
export const AsideWithRating = ({ queryConfig }: IProps) => {
  const navigate = useNavigate();

  const handleFilterRating = (ratingFilter: number) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        ...queryConfig,
        rating_filter: String(ratingFilter),
      }).toString(),
    });
  };
  return (
    <ul className="mt-3">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <li className="py-1 pl-2" key={index}>
            <div
              className="flex items-center text-sm cursor-pointer "
              onClick={() => handleFilterRating(5 - index)}
              tabIndex={0}
              role="button"
              aria-hidden="true"
            >
              {Array(5)
                .fill(0)
                .map((_, indexStar) => {
                  if (indexStar < 5 - index) {
                    return (
                      <svg
                        key={indexStar}
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
                    );
                  }

                  return (
                    <svg
                      viewBox="0 0 30 30"
                      className="w-3 h-3"
                      key={indexStar}
                    >
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stopColor="#FFD211"></stop>
                          <stop offset="100%" stopColor="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fillRule="evenodd"
                        stroke="url(#star__hollow)"
                        strokeWidth="2"
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      ></path>
                    </svg>
                  );
                })}
              {index !== 0 ? <span className="pl-2">trở lên</span> : ''}
            </div>
          </li>
        ))}
    </ul>
  );
};
