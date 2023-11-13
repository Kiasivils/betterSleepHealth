import React from 'react'
import './footer.css';
import betterSleepHealthLogo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';




const Footer = () => {
   return (
       <>
           <div className="Footer">
               <div className="container">
                   <div className="row">
                       <div className="col-md-6 col-lg-5 col-12 ft-1">
                           <img className='footer-logo' src={betterSleepHealthLogo}/>
                           <div className="footer-icons">
                               <i><FontAwesomeIcon icon={faFacebookF} /></i>
                               <i><FontAwesomeIcon icon={faTwitter} /></i>
                               <i><FontAwesomeIcon icon={faInstagram} /></i>
                           </div>
                       </div>
                       <div className="col-md-6 col-lg-3 col-12 ft-2">
                           <h5>Quick Links</h5>
                           <ul >
                               <li><NavLink to = '/about'>About Us</NavLink></li>
                               <li><NavLink to = '/contact'>Contact Us</NavLink></li>
                               <li><NavLink to = '/references'>References</NavLink></li>
                               <li><NavLink to = 'https://account.venmo.com/u/KevinTrice1' target='_blank'>Payment</NavLink></li>
                           </ul>
                       </div>
                       <div className="col-md-6 col-lg-4 col-12 ft-3">
                           <h5>Contact</h5>
                           <p><i><FontAwesomeIcon icon={faPhone} /></i>123-456-7890</p>
                           <p><i><FontAwesomeIcon icon={faEnvelope}/></i> bettersleephealth@gmail.com</p>
                           <p><i><FontAwesomeIcon icon={faLocationDot} /></i>Louisville, Ky</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className='Last-footer'>
               <p>@2023 BETTERSLEEPHEALTH </p>
           </div>
       </>
   )
}


export default Footer
