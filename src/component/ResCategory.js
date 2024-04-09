import React , {useState}from 'react'
import ItemList from './ItemList'

function ResCategory({cardData,show,setExpand}) {
    // const [show ,setShow]= useState(false)
    const handleClick=()=>{
        // setShow(!show )
        // console.log('m')
        setExpand( )
    }
    // console.log(cardData,'jj')
  return (
    <div>
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
    {/* //header
    //body */}
    <span >{cardData.title} - {cardData.itemCards.length}</span>
    <span>⬇️</span>
    </div>
   {show?<ItemList items={cardData.itemCards}/>:''} 
    </div>
    </div>
  )
}

export default ResCategory
