import Navbar from './components/navbar/Navbar';
import ProductList from './components/productList/ProductList';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer 
        position="top-center"
        transition={Zoom}
      />
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;