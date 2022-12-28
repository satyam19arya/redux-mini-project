import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slices/productSlice';
// import { loadProducts } from '../../redux/slices/productSlice';
import SingleProduct from '../singleProduct/SingleProduct';
import './ProductList.css';

const ProductList = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products)
  const status = useSelector(state => state.productReducer.status)

  useEffect(() => {
    dispatch(fetchData())         //dispatch to the middleware
    // fetchData();
    // eslint-disable-next-line
  }, [])

  // async function fetchData(){
  //   const response = await fetch('https://api.escuelajs.co/api/v1/products');
  //   const data = await response.json();

  //   dispatch(loadProducts(data));
  // }

  if(status === 'loading'){
    return <h2 className='loading'>Loading...</h2>
  }
  if(status === 'failed'){
    return <h2 className='loading'>Uh oh! Something went wrong</h2>
  }

  return (
    <div className="productList">
        {products.map((item) => (<SingleProduct key={item.id} product={item} />))}
    </div>
  )
}

export default ProductList;