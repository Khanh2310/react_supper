import React, { InputHTMLAttributes, forwardRef } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputWithNumber = forwardRef<HTMLInputElement, IProps>(
  function InputBase({ onChange, ...rest }, ref) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if ((/^\d+$/.test(value) || value === '') && onChange) {
        onChange(e);
      }
    };
    return (
      <input
        className="p-2 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
        {...rest}
        onChange={handleChange}
        ref={ref}
      />
    );
  }
);
