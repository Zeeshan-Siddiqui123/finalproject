import React from 'react';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './Routes';
import Cart from './Screens/Cart';
import Index from './Screens/Index';
import ShopItems from './Screens/ShopItems';
import Footer from './Components/Footer';
import Login from './Screens/Login';
import ProductDetails from './Screens/ProductDetails';
import Products from './Screens/Products';
// import { CartProvider } from './Screens/CartContext';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, screen }, index) => (
            <Route key={index} path={path} element={screen} />
          ))}
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Login />} />
          <Route path='*' element={<div>Page Not Found</div>} />
          <Route path='/' element={<Index />} />
          <Route path='/shopitems' element={<ShopItems />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetails />} /> {/* Updated this route */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
