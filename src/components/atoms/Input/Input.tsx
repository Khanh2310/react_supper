import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

type Props = {
  className?: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  children?: React.ReactNode;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  errorMessage?: string;
};
export const Input = ({
  placeholder,
  className,
  type,
  children,
  register,
  rules,
  errorMessage,
  name,
}: Props) => {
  return (
    <div className={`${children ? 'relative' : ' mb-[30px]'}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`border w-full p-3 outline-none  ${className}`}
        {...register(name, rules)}
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
