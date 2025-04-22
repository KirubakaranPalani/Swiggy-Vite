import React from "react";
import { Link } from "react-router-dom";
import RestroCard, { openRestroCard } from "../components/RestroCard";
import useBodyComponent from "../utils/useBodyComponent";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "../screens/Shimmer";

const Body = () => {
  const { resList, filteredList, setFilteredList, searchText, setSearchText } =
    useBodyComponent();
  // console.log(useBodyComponent());
  const RestaurantIsOpen = openRestroCard(RestroCard);

  // const [resList, setResList] = useState([]);
  // const [filteredList, setFilteredList] = useState([]);
  // const [searchText, setSearchText] = useState("");

  // if no dependency array => useEffect is called on every render
  // useEffect(() => {
  //   console.log("UseEffect without dependency")
  // })
  // if dependency array is empty => useEffect is called on initial render(just one)
  // useEffect(() => {
  //   console.log("UseEffect with empty dependency")
  // }, []);

  // conditional rendering
  // if (resList.length === 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Look's like you were offline Please turn on your network</h1>;
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-neutral-200 m-4 rounded-xl"
            onClick={() => {
              const filterList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filterList);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-2 py-2 bg-neutral-200 rounded-xl "
            onClick={() => {
              const filteredList = resList.filter(
                (data) => data.info.avgRating > 4.5
              );
              setFilteredList(filteredList);
              console.log(resList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((data) => (
          <Link key={data.info.id} to={"/restaurantmenu/" + data.info.id}>
            {data.info.isOpen ? (
              <RestaurantIsOpen key={data.info.id} resData={data}/>
            ) : (
              <RestroCard key={data.info.id} resData={data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
