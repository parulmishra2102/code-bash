import { useState } from "react";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";

function ItemList({ items }) {
   
  const dispatch =useDispatch();
    const handleClick=(item)=>{
      debugger
      dispatch(addItem(item))

        // console.log('clicked')
    }
//   console.log(items, "items");
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justifi-between"
        >
        <div className="w-40 p-4">
          <img src={CDN_URL + item.card.info.imageId} className="w-14"></img>
          <button onClick={()=>handleClick(item)}>ADD+</button>
         </div>
          <div>
          
          <div className="py-2">
            <span>{item.card.info.name} </span>

            <span>
              {" "}
              - rs{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
