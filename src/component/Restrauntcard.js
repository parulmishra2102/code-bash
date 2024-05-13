import React from "react";
import { FOOD_URL, LOGO1_URL } from "../utils/constant";

function Restrauntcard(props) {
  const { detail } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = detail?.info;
   console.log(detail)
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200">
      <img
        src={FOOD_URL + cloudinaryImageId}
        className="rounded-lg"
        alt="blank"
      />
      <h3 className="font-bold  py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating}</h5>
    </div>
  );
}

export default Restrauntcard;
