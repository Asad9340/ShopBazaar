import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { useEffect } from 'react';
import Products from './Components/Products/Products';
import Display from './Components/Display/Display';

function App() {
  const [products, setProducts] = useState([]);
  const [displayCart, setDisplayCart] = useState([]);
  const handleAddToCart = product => {
    const isExists = displayCart.find(p => p.id === product.id);
    if (!isExists) {
      const newDisplayCart = [...displayCart, product];
      setDisplayCart(newDisplayCart);
    }
    else {
      alert("Product already exists!");
    }
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
          <Display displayCart={displayCart}></Display>
        </div>
      </div>
    </>
  );
}

export default App;
