import { useState, useEffect } from "react";
import { RESTAURANT_APIs } from "./constant"

const useBodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_APIs);
      const json = await response.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setResList(restaurants);
      setFilteredList(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  return { resList, filteredList, setFilteredList, searchText, setSearchText };
};

export default useBodyComponent;

