import { BasicLayout } from '@/layouts/BasicLayout';
import { Login } from '@/pages/Login';
import { ProductList } from '@/pages/ProductList';
import { Register } from '@/pages/Register';

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
const isAuthenticated = false;
// chưa đăng nhập
const ProtectedRoute = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// đã đăng nhập
const RejectedRoute = () => {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route element={<BasicLayout />}>
            <Route index element={<ProductList />} />
          </Route>
        </Route>
        <Route path="/" element={<RejectedRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
