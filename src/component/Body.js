import React, { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
// import dataVal from "../utils/mockData";
import Restrauntcard from "./Restrauntcard";
import Shimmer from "./Shimmer";

function Body() {

  const [listOfRestraunt, setRestrauntList] = useState([]);
  const[filteredRestro,setFilteredRestro]=useState([])
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus()
  useEffect(() => {
    fetchData();
  }, []);
// console.log('pa',listOfRestraunt)
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestrauntList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestro( json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  };


  //conditional rendering
  // if(listOfRestraunt?.length===0){
  //   // return  <h1>loading</h1>
  //   return  <Shimmer></Shimmer>
  // }
  if(onlineStatus===false)return <h1>Ooops you seems offline</h1>
  return listOfRestraunt?.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
        {/* <div className='search'>Search</div> */}
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="searchBox"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)} />

            <button 
            onClick={()=>{
              debugger
              const filterRestraunt = listOfRestraunt.filter((res)=>{
                
                debugger
                 return res?.info.name.toLowerCase().includes(searchText.toLowerCase()) })
                 setFilteredRestro(filterRestraunt)
            }}
            // {console.log(filterRestraunt,filterRestraunt)}

            
            >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            debugger;
            const filteredList = listOfRestraunt.filter(
              (res) => res?.info.avgRating > 4
            );
            setRestrauntList(filteredList);
          } }
        >
          Top Rated
        </button>
      </div><div className="res-container">
          {/* {dataVal.map((item) => ( */}
          {filteredRestro.map((restraunt) => (
            <Restrauntcard detail={restraunt} key={restraunt.parentId} />
          ))}
          {/* <Restrauntcard food={'burger'} cuisine={'italian'} rating={"4.1"}/>
  <Restrauntcard food={'biriyani'} cuisine={"Mughalai"} rating={"4.4"}/>
  <Restrauntcard food={'pizza'} cuisine={"french"} rating={"4.8"}/>
  <Restrauntcard food={'sweet'} cuisine={"Indian"} rating={"4.7"}/> */}
        </div></div>
  );
}

export default Body;
