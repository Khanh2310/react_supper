import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputWithNumber = forwardRef<HTMLInputElement, IProps>(
  function InputBase({ onChange, value = '', ...rest }, ref) {
    const [localValue, setLocalValue] = useState<string>(value as string);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (/^\d+$/.test(value) || value === '') {
        // thực thi onChange callback từ bên ngoài truyền vào props
        onChange && onChange(e);

        // cập nhật localValue State
        setLocalValue(value);
      }
    };
    return (
      <input
        className="p-2 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
        {...rest}
        onChange={handleChange}
        value={value || localValue}
        ref={ref}
      />
    );
  }
);
