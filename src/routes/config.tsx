import { Register } from '@/pages/Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
