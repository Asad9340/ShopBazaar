/* eslint-disable react/prop-types */
import SingleItem from "../SingleItem/SingleItem";
function Display({ displayCart }) {
  console.log(displayCart);
  return (
    <div className="bg-gray-200 p-3 rounded-lg">
      <div className="flex justify-between mb-2">
        <h2 className="font-semibold">Products </h2>
        <h2 className="font-semibold">Price</h2>
      </div>
      <hr  className="border border-black"/>
      {
        displayCart.map((item,index)=> <SingleItem key={index} item={item}></SingleItem>)
      }
    </div>
  );
}

export default Display;
