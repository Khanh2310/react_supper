import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
