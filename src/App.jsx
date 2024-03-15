import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { useEffect } from 'react';
import Products from './Components/Products/Products';
import Display from './Components/Display/Display';

function App() {
  const [products, setProducts] = useState([]);
  const [displayCart, setDisplayCart] = useState([]);
  const handleAddToCart = product => {
    const newDisplayCart = [...displayCart, product];
    console.log(newDisplayCart);
    setDisplayCart(newDisplayCart);
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
      <div className="grid gap-4 grid-cols-12 mx-4">
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
