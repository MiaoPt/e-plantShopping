
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import Checkout from './components/Checkout';
import { useState } from "react";

function App() {
  const [page, setPage] = useState('landing');
  const goToProducts = () => {setPage('products')};
  const goToCart = () => {setPage('cart')};
  const goToCheckout = () => {setPage('checkout')};
  
  return (
     
    <>
      {page === 'landing' && <AboutUs goToProductsParam={goToProducts} />}
      {page === 'products' && <ProductList goToCartParam={goToCart} />}
      {page === 'cart' && <CartItem goToProductsParam={goToProducts} goToCheckoutParam={goToCheckout} />}
      {page === 'checkout' && <Checkout />};

    </>
   
  );
}

export default App;
