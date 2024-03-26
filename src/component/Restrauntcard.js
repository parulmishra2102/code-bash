import React from 'react'
import { FOOD_URL,LOGO1_URL } from '../utils/constant'

function Restrauntcard(props) {
 
  const {detail}
     
    = props
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating
  } = detail?.info
  // console.log(detail)
  return (
    <div className='res-card' style={{backgroundColor: "grey"}}>
    <img src={FOOD_URL + cloudinaryImageId} className="res-logo" alt="blank"/>
    <h3>{name}</h3>
    <h4>{cuisines.join(",")}</h4>
    <h5>{avgRating}</h5>
    </div>
  )
}

export default Restrauntcard
