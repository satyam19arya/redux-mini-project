import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './Navbar.css'

const Navbar = () => {
  const cart = useSelector(state => state.cartReducer.cart);
  let count = 0;
  cart.forEach((item) => (count += item.quantity));

  return (
    <nav>
        <div className="banner">
          My Shopify
        </div>

        <div className="right-layout">
          <div className="cart-layout">
            <AiOutlineShoppingCart className='banner'/>
            <h3 className="banner">{count}</h3>
          </div>
        </div>
    </nav>
  )
}

export default Navbar; 