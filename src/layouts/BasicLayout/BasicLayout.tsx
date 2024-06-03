import { Header } from '@/components/molecules/Header';
import { Outlet } from 'react-router-dom';

export const BasicLayout = () => {
  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};
