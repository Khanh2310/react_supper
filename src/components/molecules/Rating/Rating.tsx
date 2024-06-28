import { ReactNode } from 'react';

interface IRating {
  rating: number;
  children?: ReactNode;
}

export const Rating = ({ rating, children }: IRating) => {
  /*
  - default rating: 3.4
  
  1* <= 3.4 => 100%
  2* <= 3.4 => 100%
  3* <= 3.4 => 100%
  4* > 3.4 => 40% (4 - 3.4 < 1)
  5* > 3.4 => 0% (5 - 3.4 > 1)

*/

  /*
  index 0: Có 5 cái màu vàng tương ứng từ indexStar 0 - 4 đều màu vàng
  index 1: Có 4 cái màu vàng tương ứng từ indexStar 0 - 3 đều màu vàng
  index 2: Có 3 cái màu vàng tương ứng từ indexStar 0 - 2 đều màu vàng
  index 3: Có 2 cái màu vàng tương ứng từ indexStar 0 - 1 đều màu vàng
  index 4: Có 1 cái màu vàng tương ứng từ indexStar 0  đều màu vàng


  Chúng ta nhận ra là indexStar < 5 - index => màu vàng
   */

  const handleWidth = (order: number) => {
    if (order <= rating) {
      return '100%';
    }
    if (order > rating && order - rating < 1) {
      return (rating - Math.floor(rating)) * 100 + '%';
    }
    return '0%';
  };

  return (
    <div className="flex items-center">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className="relative" key={index}>
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: handleWidth(index + 1) }}
            >
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
        ))}
      {children}
    </div>
  );
};
