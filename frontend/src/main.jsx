import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import Shop from './pages/shop.jsx';
import ShopContextProvider from './context/ShopContext.jsx';
import ShopCategory from './components/Product/Category/Category.jsx';
import FAQ from './components/FaQ/Faq.jsx';
import Product from './components/Product/Product.jsx';
import AboutUs from './components/Lainnya/TentangKami.jsx';
import PrivacyPolicy from './components/Lainnya/KebijakanPrivasi.jsx';
import TermsConditions from './components/Lainnya/SyaratKetentuan.jsx';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kid" element={<ShopCategory category="kid" />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="kebijakanpengguna" element={<PrivacyPolicy />} />
          <Route path="/tentangkami" element={<AboutUs />} />
          <Route path="/syaratketentuan" element={<TermsConditions />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  </React.StrictMode>
);
