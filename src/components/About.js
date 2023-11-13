
import React from 'react'
import Navbar from '../header/Navbar';
import Consultation from './consultation.js';
import Card from './Card.js';
import Testimonies from './Testimonies';
import sleepWoman from '../images/smiling-woman.jpeg'
import sleepMan from '../images/sleeping-man.avif'
import Footer from '../footer/Footer.js';










const About = () => {



    const handleClick = () => {
        window.open("https://drchrono.com/scheduling/offices/dGhpcyBpcyAxNiBjaGFyc6a8FJNMnMYLsC2WRxAfig4=")
       }

 return (
   <>
     <Consultation />
     <Navbar />
     <div>
         <img className='about' src={sleepWoman} alt='Placeholder' />
         <div className='about-us-info'>
             <h1>About Us</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
         </div>
     <div className='about-us-providers'>
       <div className='about-us-providers-info'>
         <h1>Our Provider: The Highly Qualified Individual At Better Sleep Health</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
     </div>
       <div className='about-us-consultation-wrapper'>
           <div className='about-us-consultation'>
             <h1>Schedule your Consultation</h1>
             <p>Begin your journey today at Better Sleep Health</p>


             <div className='about-us-consultation-button'>
                 <button onClick={handleClick}>GET STARTED TODAY</button>
             </div>
           </div>
       </div>
       <div className="cards">
           <Card title="Adult/Pediatric Disorders" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia elit nec libero ultricies, eget blandit ipsum malesuada. Fusce volutpat diam et felis rhoncus, id ultricies neque tincidunt. Vestibulum auctor nunc eu est tincidunt, sit amet laoreet massa tincidunt. Curabitur non lacus nec ex convallis convallis. Nulla facilisi. Nunc eget aliquam erat. Vestibulum aliquam massa sed ligula congue, in fermentum velit eleifend. Cras hendrerit vel dolor sit amet scelerisque. Nulla facilisi. Vivamus vehicula est nec justo volutpat, ut varius ex dictum. Nulla facilisi. Sed eget tortor eu risus dictum fringilla. Sed a massa ac augue venenatis aliquet. Vestibulum eu augue nec arcu varius facilisis eget non erat. Nulla facilisi. Morbi et tellus sit amet erat efficitur euismod a nec arcu." />
           <Card title="Clinical Services" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia elit nec libero ultricies, eget blandit ipsum malesuada. Fusce volutpat diam et felis rhoncus, id ultricies neque tincidunt. Vestibulum auctor nunc eu est tincidunt, sit amet laoreet massa tincidunt. Curabitur non lacus nec ex convallis convallis. Nulla facilisi. Nunc eget aliquam erat. Vestibulum aliquam massa sed ligula congue, in fermentum velit eleifend. Cras hendrerit vel dolor sit amet scelerisque. Nulla facilisi. Vivamus vehicula est nec justo volutpat, ut varius ex dictum. Nulla facilisi. Sed eget tortor eu risus dictum fringilla. Sed a massa ac augue venenatis aliquet. Vestibulum eu augue nec arcu varius facilisis eget non erat. Nulla facilisi. Morbi et tellus sit amet erat efficitur euismod a nec arcu." />
           <Card title="Education and Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia elit nec libero ultricies, eget blandit ipsum malesuada. Fusce volutpat diam et felis rhoncus, id ultricies neque tincidunt. Vestibulum auctor nunc eu est tincidunt, sit amet laoreet massa tincidunt. Curabitur non lacus nec ex convallis convallis. Nulla facilisi. Nunc eget aliquam erat. Vestibulum aliquam massa sed ligula congue, in fermentum velit eleifend. Cras hendrerit vel dolor sit amet scelerisque. Nulla facilisi. Vivamus vehicula est nec justo volutpat, ut varius ex dictum. Nulla facilisi. Sed eget tortor eu risus dictum fringilla. Sed a massa ac augue venenatis aliquet. Vestibulum eu augue nec arcu varius facilisis eget non erat. Nulla facilisi. Morbi et tellus sit amet erat efficitur euismod a nec arcu." />
        </div>
        <div className='about-us-sleep'>
           <div className='sleep-and-health'>
             <div className='sleep-health-content'>
                 <h1>Sleep and Health</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
           </div>
      
           <img src={sleepMan} alt="sleeping-man"/>
           </div>
         </div>
        <Testimonies/>
        <div className='about-us-locations'>


        </div>
   </div>
   <Footer/>
   </>
 )
}


export default About
