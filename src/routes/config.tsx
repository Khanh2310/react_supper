import { ProductDetail } from '@/components/organisms/ProductDetail';
import { BasicLayout } from '@/layouts/BasicLayout';
import { Login } from '@/pages/Login';
import { ProductList } from '@/pages/ProductList';
import { Profile } from '@/pages/Profile';
import { Register } from '@/pages/Register';
import { AppContext } from '@/states/statusState.context';
import { useContext } from 'react';

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
// chưa đăng nhập
const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// đã đăng nhập
const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route index element={<ProductList />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RejectedRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
