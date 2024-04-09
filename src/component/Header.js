import React, { useState , useContext} from 'react'
import { Link } from 'react-router-dom';
import {LOGO_URL} from '../utils/constant'
import useOnlineStatus from '../utils/useOnlineStatus';
import { UseSelector, useSelector } from 'react-redux';
import UserContext from '../utils/userContext';
import appStore from '../utils/store';
const Header = () => {

 
  const[buttonName,setButtonName]=useState('Login')
  const onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext)
  console.log('p',loggedInUser)
  const m = useSelector(store=>store.cart.items)
  console.log(m)
  // const btnName= 'Login';
  const clickHandler =()=>{
    if(buttonName == 'Login'){
    setButtonName('Logout')

    }
    else {
      setButtonName('Login')
    }
  }
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            className="w-56"
            alt="blank"
          ></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
          {onlineStatus? <h1>🙂</h1>: <h1>😒</h1>}
          <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold"><Link to="/cart">Cart-({m.length})</Link></li>
           <li>{loggedInUser}</li>
            <button className='login' onClick={clickHandler}>{buttonName}</button>

          </ul>
          
        </div>
      </div>
    );
  };

export default Header
