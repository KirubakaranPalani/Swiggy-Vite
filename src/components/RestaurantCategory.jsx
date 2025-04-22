
import Items from "./Items";

const RestaurantCategory = ( {res, showItem, setShowIndex} ) => {
//   console.log(res);
// const [res, showItem, handleClick] = props;
const handleClick =() => {
    setShowIndex();
    console.log("clicked")
}
  return (
    <div className="w-6/10  bg-gray-50 shadow-2xl mx-auto ">
      <div className="flex justify-between cursor-pointer  my-4 p-4"
        onClick={handleClick}
        >
        <span className="font-bold text-2xl">
          {res.title} ({res.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
      {showItem && <Items data={res.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
