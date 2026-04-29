
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from "react";

function App() {
  const [page, setPage] = useState('landing');
  const goToProducts = () => {setPage('products')};
  const goToCart = () => {setPage('cart')};
  
  return (
     
    <>
      {page === 'landing' && <AboutUs goToProductsParam={goToProducts} />}
      {page === 'products' && <ProductList goToCartParam={goToCart} />}
      {page === 'cart' && <CartList />};

    </>
   
  );
}

export default App;
