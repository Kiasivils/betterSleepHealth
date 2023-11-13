import React from 'react'
import Consultation from './consultation.js';
import Navbar from '../header/Navbar'
import Footer from '../footer/Footer';
import sleep from '../images/sleeping-onside.jpeg'
import wakeUp from '../images/wakingupchild.webp'; 

const ContactUs = () => {


    const handleClick = () => {
        window.open("https://drchrono.com/scheduling/offices/dGhpcyBpcyAxNiBjaGFyc6a8FJNMnMYLsC2WRxAfig4=")
       }


  return (
    <><Consultation />
    <Navbar />
    <div>
        <img class="about" src={sleep} alt="Placeholder"/> 
        <div class="contact-us">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="contact-us-faq">
            <div class="contact-us-FAQ">
                <div class="contact-us-content">
                        <h1>Find Answers to Common Questions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <button> VISIT FAQ</button>
                </div>
                    <img src={wakeUp} alt="sleeping-man"/>
                </div>
                <div class="locations">
                    <h1>Locations</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <div class="cards-contact-us">
                        <div class="card">
                            <div class="card-content">
                                <h2>Better Sleep Health</h2>
                                <p>1232 Cirle Way, Louisville, Ky 39413</p>
                                <p>
                                    </p>
                                    <p>504-324-2414</p>
                                    </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-content">
                                            <h2>Better Sleep Health</h2>
                                            <p>1232 Cirle Way, Louisville, Ky 39413</p>
                                            <p>504-324-2414</p>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="contact-us-consultation-wrapper">
                                                <div class="contact-us-consultation">
                                                    <h1>Schedule your Consultation</h1>
                                                    <p>Begin your journey today at Better Sleep Health</p>
                                                    <div class="contact-us-consultation-button">
                                                        <button onClick={handleClick}>GET STARTED TODAY</button>
                                                        </div>
                                                        </div>
                                                        </div>
        </div>
      </div>
      <Footer/> 
      </>
  )
}

export default ContactUs