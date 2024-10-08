import { range } from 'lodash';
import React, { useState } from 'react';

interface Props {
  onChange?: (value: Date) => void;
  value?: Date;
  errorMessage?: string;
}

export const DateSelect = ({ value, onChange, errorMessage }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = useState({
    date: value?.getDate() || 1,
    month: value?.getMonth() || 0,
    year: value?.getFullYear() || 1999,
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: valueFromSelect, name } = event.target;
    const newDate = {
      date: value?.getDate() || date.date,
      month: value?.getMonth() || date.month,
      year: value?.getFullYear() || date.month,
      [name]: Number(valueFromSelect),
    };
    setDate(newDate);
    onChange && onChange(new Date(newDate.year, newDate.month, newDate.date));
  };

  return (
    <div className="flex flex-wrap md:justify-end">
      <div className="sm:w[20%] truncate pt-3 text-right capitalize">
        Ngày sinh
      </div>
      <div className="sm:w-[80%] pl-5">
        <div className="flex justify-between gap-2">
          <select
            name="date"
            className="h-10 w-[33%] rounded-sm border border-black/10 px-3"
            onChange={handleChange}
            value={value?.getDate() || date.date}
          >
            {range(1, 32).map((itemDay) => (
              <option key={itemDay} value={itemDay}>
                {itemDay}
              </option>
            ))}
          </select>
          <select
            name="month"
            className="h-10 w-[33%] rounded-sm border border-black/10 px-3 outline-none"
            onChange={handleChange}
          >
            {range(1, 13).map((itemMonth) => (
              <option key={itemMonth} value={itemMonth}>
                {itemMonth}
              </option>
            ))}
          </select>
          <select
            name="year"
            className="h-10 w-[33%] rounded-sm border border-black/10 px-3"
            onChange={handleChange}
          >
            {range(1990, 2024).map((itemYear) => (
              <option key={itemYear} value={itemYear}>
                {itemYear}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-1 min-h-[1.25rem] text-sm text-red-600">
        {errorMessage}
      </div>
    </div>
  );
};
