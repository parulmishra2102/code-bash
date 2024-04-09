import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {clearCart} from "../utils/cartSlice";


function Cartitem() {
    const dispatch= useDispatch()
    const handleClear=()=>{
        dispatch(clearCart())

    }
    // // const[cartItemNmae, setCartItemsName]=useState()
    const cartItems1 = useSelector((store)=>store.cart.items)
    cp
    
  return (
    <div className='text-center m-10 p-10'>
    <h1 text-2xl font-bold>{cartItems1}</h1>
    <button onClick={handleClear}>ClearCart</button>
      {cartItems1.length==0?<h1>your cart is emplty</h1>:""}
    </div>
  )
}

export default Cartitem
