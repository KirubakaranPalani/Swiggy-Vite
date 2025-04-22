import React from "react";
import { CDN_URL } from "../utils/constant";

const RestroCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, locality, avgRating} = resData?.info || []; 
  return (
    <div className="m-2.5 p-2.5 w-[250px] h-auto rounded-lg bg-amber-150 hover:bg-gray-200 shadow-xl" 
    // style={{ backgroundColor: "#f0f0f0" }}
    // style={styleCard}
    >
      <img
        className="rounded-lg"
        alt="img not found"
        src={CDN_URL+cloudinaryImageId}
      />
      <h2 className="font-bold py-2 text-2xl">{name}</h2>
      <h4 className="text-m"><span className="font-bold"> Cuisines: </span>{cuisines.join(", ")} </h4>
      <h4 className="text-m"><span className="font-bold"> Location: </span>{locality}</h4>
      <h4 className="text-m"><span className="font-bold"> Rating: </span>{avgRating} </h4>
    </div>
  );
};

export const openRestroCard = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-800 text-white rounded-xl m-2 px-5 py-1">Open</label>
        <RestroCard {...props}/>
      </div>
    )
  }
};

// const styleCard = {
//   backgroundColor:"rgb(228, 226, 226)"
// }

export default RestroCard;