/* eslint-disable react/prop-types */
import { IoMdPricetag } from 'react-icons/io';
import { TbCoinTakaFilled } from 'react-icons/tb';
function Product({ product }) {
  const { image, title, description,price } = product;
  console.log(product);
  return (
    <div className="rounded-md border p-2 ">
      <div className="flex justify-center">
        <img src={image} alt="Laptop" className="h-36 rounded-t-md" />
      </div>
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {title}
        </h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex justify-between px-6">
          <div className="flex gap-2 items-center">
            <IoMdPricetag />
            Price
          </div>
          <div className='flex gap-2 items-center font-bold'>
            <TbCoinTakaFilled />
            {price} taka
          </div>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
