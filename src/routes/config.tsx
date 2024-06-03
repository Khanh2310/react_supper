import { BasicLayout } from '@/layouts/BasicLayout';
import { Login } from '@/pages/Login';
import { ProductList } from '@/pages/ProductList';
import { Register } from '@/pages/Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<ProductList />}></Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
