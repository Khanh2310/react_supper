import { Cart } from '@/components/organisms/Cart/Cart';
import { ProductDetail } from '@/components/organisms/ProductDetail';
import { localStorageEventTarget } from '@/hook/useQueryUser';
import { BasicLayout } from '@/layouts/BasicLayout';
import { Login } from '@/pages/Login';
import { ProductList } from '@/pages/ProductList';
import { Register } from '@/pages/Register';
import { UserLayout } from '@/pages/User/layouts/UserLayout';
import { ChangePassword } from '@/pages/User/pages/ChangePassword';
import { HistoryPurchase } from '@/pages/User/pages/HistoryPurchase';
import { Profile } from '@/pages/User/pages/Profile';
import { AppContext } from '@/states/statusState.context';
import { useContext, useEffect } from 'react';

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
  const { reset } = useContext(AppContext);
  useEffect(() => {
    localStorageEventTarget.addEventListener(
      'removeUserFromLocalStorage',
      reset
    );

    // cleanup function
    return () => {
      localStorageEventTarget.removeEventListener(
        'removeUserFromLocalStorage',
        reset
      );
    };
  }, [reset]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route index element={<ProductList />} />
          <Route path=":nameId" element={<ProductDetail />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<BasicLayout />}>
            <Route path="user" element={<UserLayout />}>
              <Route path="profile" element={<Profile />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="history-purchase" element={<HistoryPurchase />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
        <Route element={<RejectedRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
