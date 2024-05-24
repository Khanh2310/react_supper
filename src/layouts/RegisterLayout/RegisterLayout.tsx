import { RegisterHeader } from '@/components/RegisterHeader';
import { Footer } from '@/components/Footer';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};
export const RegisterLayout = ({ children }: Props) => {
  return (
    <div>
      <RegisterHeader />
      <div className="  bg-orange ">
        <div className="max-w-[1040px] bg-[url('assets/bg-auth.png')]  bg-no-repeat w-full mx-auto bg-center flex justify-end items-center min-h-[600px]">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
