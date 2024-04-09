
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestroMenu from "../utils/useRestroMenu";
import {useState } from "react";
import ResCategory from "./ResCategory";

function RestrauntMenu() {
  //   const [resInfo, setResInfo] = useState(null);
   const [expand, setExpand] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestroMenu(resId);
  // console.log(resInfo, "resInfo");
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
  if (resInfo == null) return <Shimmer></Shimmer>;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2].card.card.info;
  // const {x}= resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR?.cards[2].card?.card.itemCards[0].info
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card.card;

  // console.log(
  //   "x",
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
  // );
  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("category", category);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl "> {name}</h1>

      <p className="font-bold text-lg">
        {cuisines.join(" , ")}- {costForTwoMessage}
      </p>

      {category.map((category,index) => (
        <ResCategory
          key={category?.card?.card.title}
          cardData={category?.card?.card}
          show={index===expand?true:false}
          setExpand={()=>setExpand(index)}
        />
      ))}
      {/* <h2>Menu</h2>
      <ul>
      {itemCards?.map(item=><li>{item.card.info.name}</li>)} */}

      {/* </ul>  */}
    </div>
  );
}

export default RestrauntMenu;
