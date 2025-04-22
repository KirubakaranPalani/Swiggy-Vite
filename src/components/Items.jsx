import { CDN_URL } from "../utils/constant";

const Items = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="p-2 w-9/12">
            <span className="my-2 py-2 font-bold text-xl">{item?.card?.info?.name}</span>
            <br />
            <span className="my-2 py-2 font-bold text-xl">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-lg">{item?.card?.info?.description}</p>
          </div>
          <div className=" w-3/12 p-4 ">
          <div className="absolute mx-20 my-38">
            <button className="p-2 rounded-xl shadow-xl bg-gray-800 text-white hover:cursor-pointer">Add +</button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
