
import '../App.css';
import { useSelector } from "react-redux";

import logo from '../logo.png';
import { FaShoppingCart } from "react-icons/fa";



function Banner({goToCartParam}) {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    return (
        <div className="navbar">
          <img src={logo} alt='logo' className='logo-img'></img> 
          <div className='title'>
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
          </div>
          
          <h2>Plants</h2>

          <div className='cart'>
            <FaShoppingCart className="cart-icon" />
            <span className="cart-number" onClick={() => { goToCartParam()}}>{totalQuantity}</span>
          </div>
        </div>
    )
}

export default Banner;