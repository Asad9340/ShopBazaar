/* eslint-disable react/prop-types */
import SingleItem from '../SingleItem/SingleItem';
function Display({ displayCart, handleDelete }) {
  return (
    <div className="bg-gray-200 p-3 rounded-lg">
      <div className="flex justify-between mb-2">
        <h2 className="font-semibold">Products </h2>
        <h2 className="font-semibold">Price</h2>
      </div>
      <hr className="border border-black" />
      {displayCart.map((item, index) => (
        <SingleItem
          key={index}
          item={item}
          handleDelete={handleDelete}
        ></SingleItem>
      ))}
      <hr className="border border-black mt-2" />
      <div className="flex justify-between">
        <p className="font-semibold">Total Price</p>
        <p className="font-semibold">
          {Math.round(displayCart.reduce((p, c) => p + c.price, 0))} taka
        </p>
      </div>
    </div>
  );
}

export default Display;
