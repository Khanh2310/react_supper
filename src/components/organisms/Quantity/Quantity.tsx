import { InputWithNumber } from '@/components/molecules/InputWithNumber';
import { InputHTMLAttributes, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  max?: number;
  onIncrease?: (value: number) => void;
  onDecrease?: (value: number) => void;
  onType?: (value: number) => void;
  classNameWrapper?: string;
}

export const Quantity = ({
  max,
  onIncrease,
  onDecrease,
  onType,
  classNameWrapper = 'ml-10',
  value,
  ...rest
}: Props) => {
  const [localValue, setLocalValue] = useState<number>(Number(value || 0));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // lấy giá trị người dùng truyền vào
    let _value = Number(event.target.value);

    // kiểm tra điều kiện, nếu người dùng nhập giá trị lớn hơn max thì ta set lại value bằng với giá trị max,
    if (max !== undefined && _value > max) {
      _value = max;
    } else if (_value < 1) {
      // ngược lại nếu người dùng nhập số 0 thì ta set value lại = 1
      _value = 1;
    }

    onType && onType(_value);
    setLocalValue(_value);
  };

  // increase function

  const increase = () => {
    let _value = Number(value || localValue) + 1;
    if (max !== undefined && _value > max) {
      _value = max;
    }
    onIncrease && onIncrease(_value);
    setLocalValue(_value);
  };

  // decrease function
  const decrease = () => {
    let _value = Number(value || localValue) - 1;
    if (_value < 1) {
      _value = 1;
    }

    onDecrease && onDecrease(_value);
    setLocalValue(_value);
  };

  return (
    <div className={`${classNameWrapper} flex items-center`}>
      <button
        className="flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600"
        onClick={decrease}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <InputWithNumber
        className="h-8 w-14 border-y border-gray-300 p-1 text-center outline-none"
        onChange={handleChange}
        value={value || localValue}
        {...rest}
      />
      <button
        className="flex h-8 w-8 items-center justify-center rounded-r-sm border border-gray-300 text-gray-600"
        onClick={increase}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};
