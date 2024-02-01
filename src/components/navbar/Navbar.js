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
          My Collections
        </div>

        <div className="right-layout">
          <div className="cart-layout">
            <AiOutlineShoppingCart className='banner'/>
            { 
              cart.length > 0  && <div className="count">{count}</div>
            }
          </div>
        </div>
    </nav>
  )
}

export default Navbar;