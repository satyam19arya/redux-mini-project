import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slices/cartSlice';
import './singleProduct.css';

const SingleProduct = ({product}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const curItem = cart.find(item => item.id === product.id);
  const curQuantity = curItem ? curItem.quantity : 0;

  return (
   <div className='singleProduct'>
        <img className='productImg' src={product.images} alt={product.title} />

        <div className='productInfo'>
           <h3 className='productTitle'>{product.title}</h3>
           <p className='productPrice'>${product.price}</p>
        </div>
        <p className='productDescription'>{product.description}</p>
        
        <div className='cartInfo'>
          <button className='button' onClick={() => dispatch(removeFromCart(product.id))}>-</button>
          <h4>{curQuantity}</h4>
          <button className='button' onClick={() => dispatch(addToCart(product.id))}>+</button>
        </div>
     </div>
  )
}

export default SingleProduct; 