import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { useEffect } from 'react';
import Products from './Components/Products/Products';
import Display from './Components/Display/Display';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [displayCart, setDisplayCart] = useState([]);
  const handleAddToCart = product => {
    const isExists = displayCart.find(p => p.id === product.id);
    if (!isExists) {
      const newDisplayCart = [...displayCart, product];
      setDisplayCart(newDisplayCart);
      toast.success('Product added successfully', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      toast.warn('Products already exist !', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };
  const handleDelete = id => {
    const newDisplayCart = displayCart.filter(item => item.id !== id);
    console.log(newDisplayCart);
    setDisplayCart(newDisplayCart);
    toast.error('Delete successfully', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('./fakeData.json');
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:grid gap-4 grid-cols-12 mx-4">
        <div className="col-span-8">
          <Products
            products={products}
            handleAddToCart={handleAddToCart}
          ></Products>
        </div>
        <div className="p-2 col-span-4">
          <Display
            displayCart={displayCart}
            handleDelete={handleDelete}
          ></Display>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </>
  );
}

export default App;
