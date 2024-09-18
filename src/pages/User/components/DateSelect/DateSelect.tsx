import { range } from 'lodash';
import { useState } from 'react';

export const DateSelect = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = useState({
    day: 1,
    month: 1,
    year: 1990,
  });

  return (
    <div className="flex flex-wrap md:justify-end">
      <div className="sm:w[20%] truncate pt-3 text-right capitalize">
        Ngày sinh
      </div>
      <div className="sm:w-[80%] pl-5">
        <div className="flex justify-between gap-2">
          <select
            name=""
            className="h-10 w-[33%] rounded-sm border border-black/10 px-3"
          >
            {range(1, 32).map((itemDay) => (
              <option key={itemDay} value={itemDay}>
                {itemDay}
              </option>
            ))}
          </select>
          <select
            name=""
            className="h-10 w-[33%] rounded-sm border border-black/10 px-3 outline-none"
          >
            {range(1, 13).map((itemMonth) => (
              <option key={itemMonth} value={itemMonth}>
                {itemMonth}
              </option>
            ))}
          </select>
          <select
            name=""
            className="h-10 w-[33%] rounded-sm border border-black/10 px-3"
          >
            <option disabled>Năm</option>
          </select>
        </div>
      </div>
    </div>
  );
};
