/* eslint-disable react/prop-types */
function SingleItem({ item, handleDelete }) {
  return (
    <div className="grid grid-cols-12 gap-4 mb-2 my-3 items-center bg-white p-2 md:p-3 rounded-lg">
      <h2 className="col-span-7">{item.title}</h2>
      <h2 className="flex col-span-3">{Math.round(item.price)} tk</h2>
      <div className="flex justify-end col-span-2">
        <button
          onClick={() => handleDelete(item.id)}
          className="px-3 py-2 bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-950 font-semibold rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleItem;
