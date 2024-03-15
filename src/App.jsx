import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { useEffect } from 'react';
import Products from './Components/Products/Products';

function App() {
  const [products, setProducts] = useState([]);
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
      <div>
        <Products products={products} />
      </div>
    </>
  );
}

export default App;
