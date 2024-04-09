import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {clearCart} from "../utils/cartSlice";
import ItemList from './ItemList';
function ShoopingCart() {
    const dispatch= useDispatch()
    const handleClear=()=>{
        dispatch(clearCart())

    }
    const cartItems1 = useSelector((store)=>store.cart.items)
  return (
    <div className='text-center m-10 p-10'>
    
    <h1 text-2xl font-bold>Cart</h1>
    <ItemList items={cartItems1}/>
    <button onClick={handleClear}>ClearCart</button>
      {cartItems1.length==0?<h1>your cart is emplty</h1>:""}
    </div>
  )
}

export default ShoopingCart
