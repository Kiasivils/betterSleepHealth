

import React, {useState} from 'react'
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { NavLink } from 'react-router-dom';
import './navbarStyles.css';
import betterSleepHealthLogo from '../images/logo.png';


const Navbar = () => {


   const [Mobile, setMobile] = useState(false)


 return (
   <nav className="navbar">
           <a className= 'logo-nav' href='/'><img src={betterSleepHealthLogo}/></a>
               <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={()=> setMobile(false)}>
               <NavLink to='/'>Home</NavLink>
               <NavLink to = '/about'>About Us</NavLink>
               <NavLink to = '/contact'>Contact Us</NavLink>
               <NavLink to = '/references'>References</NavLink>
               <NavLink to = 'https://account.venmo.com/u/KevinTrice1' target='_blank'>Payment</NavLink>
               </ul>
               <button className='mobile-menu-icon' onClick={()=> setMobile(!Mobile)}>
                   {Mobile? <ImCross/> : <FaBars /> }
               </button>
 </nav>
 )
}


export default Navbar
