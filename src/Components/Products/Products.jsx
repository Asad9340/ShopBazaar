/* eslint-disable react/prop-types */
import Product from "../Product/Product"
function Products({ products, handleAddToCart }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          handleAddToCart={handleAddToCart}
        ></Product>
      ))}
    </div>
  );
}

export default Products