import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {LOGO_URL} from '../utils/constant'
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const[buttonName,setButtonName]=useState('Login')
  const onlineStatus = useOnlineStatus()
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
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            className="logo"
            alt="blank"
          ></img>
        </div>
        <div className="nav-items">
          <ul>
          {onlineStatus? <h1>🙂</h1>: <h1>😒</h1>}
          <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/cart">Cart</Link></li>
           
            <button className='login' onClick={clickHandler}>{buttonName}</button>
          </ul>
          
        </div>
      </div>
    );
  };

export default Header
