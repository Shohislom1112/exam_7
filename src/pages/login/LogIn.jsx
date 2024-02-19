import React, { useEffect, useNavigate} from 'react'
import './LogIn.scss'
import {NavLink} from 'react-router-dom'
import password from '../../../public/password.png'
import food from '../../../public/login_food.png'
import profile from '../../../public/login_profile.png'
import gmail from '../../../public/login_gmail.png'
import none_wiew from '../../../public/eye_none.png'
import wiew from '../../../public/eye.png'
import logo from '../../../public/logog.png'
import { i } from 'vite/dist/node/types.d-jgA8ss1A'

import Footer from '../../Components/footer/Footer'
import Header from '../../Components/header/Header'
const LogIn = ({register, registerr, setregisterr}) => {
//   const navigate = useNavigate()
//   useEffect(()=>{ 
    
//   }, [])
//   const handl=()=> {
// {register.value == registerr.value? navigate('/'):null}

//   }
  return (
    <div className='login'>
      {/* <Header/> */}
      <div className="signup">
        <NavLink to="/"><img src={logo} className='logo' alt="" /></NavLink>
      <div className="cards">
        <div className="card_1">
        <p className="p1">
        Sign Up To eatly
        </p>

        <div className="input1">
        <img src={gmail} alt="" className="profile" />
          <input type="text" placeholder='EMAIL' id='text' className='name' />
        </div>
        <div className="input1">
        <img src={password} alt="" className="profile" />
          <input type="text" placeholder='PASSWORD' id='text' className='name' 
          // onChange={(e)=> setregisterr(e.target.value)} 
          />
          <img src={none_wiew} alt="" className='eye' />
          <img src={wiew} alt="" className='eye'  />
        </div>
        <button className="button" onClick={handl}>
        SIGN UP
        </button>
        <div className="p">
        Already Have An Account? <NavLink to="/signup">Sign Up</NavLink>
        </div>
        </div>
        <div className="card_2">
          <img src={food} alt="" className="imag" />
            <p className="par1">Find Foods With Love </p>
            <p className="par2">Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.</p>
        </div>
      </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}  


export default LogIn