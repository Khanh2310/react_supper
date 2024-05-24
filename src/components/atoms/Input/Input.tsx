import { ReactNode } from 'react';

type Props = {
  className?: string;
  placeholder: string;
  type: string;
  children?: ReactNode;
};
export const Input = ({ placeholder, className, type, children }: Props) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className={`border w-full p-3 outline-none  ${className}`}
      />
      {children && (
        <div className="absolute  -translate-y-2/4 top-2/4 right-0 ">
          {children}
        </div>
      )}
    </div>
  );
};
