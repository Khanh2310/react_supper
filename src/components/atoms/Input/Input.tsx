import { ReactNode } from 'react';

type Props = {
  className?: string;
  placeholder: string;
  type: string;
  children?: ReactNode;
};
export const Input = ({ placeholder, className, type, children }: Props) => {
  return (
    <div className="relative ">
      <input
        type={type}
        placeholder={placeholder}
        className={`border w-full p-3 outline-none  ${className}`}
      />
      {children && (
        <div className="absolute right-6 top-[45%] -translate-y-full select-none">
          {children}
        </div>
      )}
    </div>
  );
};
