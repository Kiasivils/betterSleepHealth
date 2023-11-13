import Consultation from './components/consultation';
import {HashRouter, Routes, Route, useLocation, Router}from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs.js';
import Reference from './components/Reference.js';
import Payment from './components/Payment.js';
import Home from './components/Home.js'
import ScrollToTop from './components/helpers/ScrollToTop.js';



function App() {
return (
 <>
<HashRouter>
      <ScrollToTop/>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<ContactUs />} />
          <Route exact path='/references' element={<Reference />} />
          <Route exact path='/payment' element={<Payment />} />
    </Routes>
 </HashRouter>
</>
 );
}


export default App;