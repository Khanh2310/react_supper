import React, { InputHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  children?: React.ReactNode;
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  errorMessage?: string;
  rules?: RegisterOptions;
}
export const Input = ({
  placeholder,
  className,
  children,
  type,
  register,
  errorMessage,
  rules,
  name,
}: Props) => {
  const registerResult = register && name ? register(name, rules) : {};
  return (
    <div className={`${children ? 'relative' : 'mb-[30px]'} `}>
      <input
        type={type}
        placeholder={placeholder}
        className={`border w-full p-3 outline-none ${className}`}
        {...registerResult}
      />
      <p className="mt-1 text-red-600 text-sm">{errorMessage}</p>

      {children && (
        <div className="absolute right-6 top-[45%] -translate-y-full select-none">
          {children}
        </div>
      )}
    </div>
  );
};
