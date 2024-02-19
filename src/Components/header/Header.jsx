import React from 'react'
import './Header.scss'
import {NavLink} from  'react-router-dom'
import logo from "../../../public/logo.png"
import shop from '../../../public/shop.png'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <nav>

      <div className='hade'>
       <img className='img1' src={logo} alt="" />
        <NavLink to="/home"><p className="link1">Home</p></NavLink>
        <NavLink to="/dishes"><p className="link">Dishes</p></NavLink>
      </div>
        <div className='hade'>
        <NavLink to="/shop"> <img src={shop} alt="" className="img2" /></NavLink>
        <NavLink to="/login"><button className="link_button">Log In</button></NavLink>
        <NavLink to="/"><button className="link_button">Sign Up</button></NavLink>
        </div>       
        </nav>
        <hr />
      </div>

    </header>
  )
}

export default Header