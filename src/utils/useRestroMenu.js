import {useEffect,useState} from 'react'
import { MENU_API } from "../utils/constant";

function useRestroMenu(resId) {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
            fetchMenu();
          }, []);
          const fetchMenu = async () => {
                const data = await fetch(
                    MENU_API+ resId
                 );
                 const json = await data.json();
            //     console.log(
            //       json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
            //         .itemCards[1].card.info.name,
            //     "u"
            //    );
             setResInfo(json.data);
              }; 
  return resInfo
}

export default useRestroMenu
