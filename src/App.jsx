import '@/styles/index.scss';

import { Route, Routes } from 'react-router-dom';

import Header from '@/components/Header/Header.jsx';
import AuthProvider from '@/context/AuthContext.jsx';
import AuthPage from '@/Pages/AuthPage/AuthPage.jsx';
import CheckoutPage from '@/Pages/CheckoutPage/CheckoutPage.jsx';
import ErrorPage from '@/Pages/ErrorPage/ErrorPage.jsx';
import HomePage from '@/Pages/HomePage/HomePage.jsx';
import ProductDetailPage from '@/Pages/ProductDetailPage/ProductDetailPage.jsx';

export function App() {
  return (
    <AuthProvider>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
