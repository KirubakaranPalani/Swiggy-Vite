import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../screens/Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null)
  
  const {resId} = useParams();
  const resDetail = useRestaurantMenu(resId);

  if(resDetail === null){
    return <Shimmer />
  }
  const { name } = resDetail?.cards[2]?.card?.card?.info || [];
  const categories = resDetail?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-4xl">{name}</h1>
      <div>
      {categories.map((category, index) =>
        <RestaurantCategory
         res = {category?.card?.card}
         key={category?.card?.card?.categoryId}
         showItem = {index === showIndex ? true : false}
         setShowIndex={() => setShowIndex(index)}
         />
      )}
      </div>

    </div>
    // <div>
    //   <h1>{name || "Unknown Restaurant"}</h1>
    //   <h2>cuisines: {cuisines?.join(", ") || "N/A"}</h2>
    //   <h3>areaName: {areaName || "N/A"}</h3>
    //   <h3>Locality: {locality || "N/A"}</h3>
    //   <h3>city: {city || "N/A"}</h3>
    //   <h3>avgRating: {avgRating || "N/A"}</h3>

    //   <h2>Menu:</h2>
    //   <ul>
    //     {itemCards.length > 0 ? (
    //       itemCards.map((res) => (
    //         <li key={res?.card?.info?.id}>
    //           {res?.card?.info?.name} - ₹{res?.card?.info?.price / 100 || "N/A"}
    //         </li>
    //       ))
    //     ) : (
    //       <p>No menu items available</p>
    //     )}
    //   </ul>
    // </div>
  );
};

export default RestaurantMenu;
