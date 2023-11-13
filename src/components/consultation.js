import React from 'react'
import './componentsStyles.css';
import { NavLink } from 'react-router-dom';






const consultation = () => {


const handleClick = () => {
 window.open("https://drchrono.com/scheduling/offices/dGhpcyBpcyAxNiBjaGFyc6a8FJNMnMYLsC2WRxAfig4=")
}


 return (
   <div className='flex-box-container'>
       <div className='consultation'>
           <h2>COVID PROTOCOLS</h2>
           {/* <h3>Insert Phone Number</h3> */}
           <button onClick={handleClick} className='consultation-button'>SCHEDULE A CONSULTATION </button>
       </div>
   </div>
 )
}


export default consultation
