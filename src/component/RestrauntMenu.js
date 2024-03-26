import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestroMenu from "../utils/useRestroMenu";



function RestrauntMenu() {
//   const [resInfo, setResInfo] = useState(null);

  const { resId }= useParams()
  const resInfo= useRestroMenu(resId)

//   debugger
//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch( MENU_API + resId)
//     const json = await data.json();
//     // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name,'u');
//     setResInfo(json.data);
//   };
if(resInfo == null ){
    return <Shimmer></Shimmer>
}

// const {x}= resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name
const {itemName} =
    resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card
     
  console.log('x',itemName)
  return (
    <div className="menu">
    <h2>menu</h2>
      <h1> {resInfo?.cards[0].card.card.info.name}</h1>
      {/* <h2>{resInfo?.cards[0].card.card.info.avgRating}</h2> */}
      <ul>
      
        <li>{resInfo?.cards[0].card.card.info.cuisines.join(" , ")} {resInfo?.cards[0].card.card.info.avgRating}</li>
        <li>{itemName}</li>
        <li>{resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name}</li> 
    
      </ul>
    </div>
  
  )
}

export default RestrauntMenu;
