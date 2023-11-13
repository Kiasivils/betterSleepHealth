



import React from 'react'
import './componentsStyles.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";


const PreviousBtn = (props) => {
 console.log(props);
 const { className, onClick } = props;
 return (
   <div className={className} onClick={onClick}>
     <ArrowBackIos style={{ color: "rgb(2, 66, 155", fontSize: "45px" }} />
   </div>
 );
};
const NextBtn = (props) => {
 const { className, onClick } = props;
 return (
   <div className={className} onClick={onClick}>
     <ArrowForwardIos style={{ color: "rgb(2, 66, 155", fontSize: "45px" }} />
   </div>
 );
};
const Testimonies = () => {
 return (
   <div
     className="testimonial"
     style={{ display: "flex", justifyContent: "center", marginTop: 10, color: 'rgb(2, 66, 155', }}
   >
     <div className="testimonial-content" style={{ width: "50%", textAlign: "center" }}>
       <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
       <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
         <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
         <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
         <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
       </Slider>
     </div>
   </div>
 );
};


const Card = ({ img }) => {
 return (
   <div
     style={{
       display: "flex",
       alignItems: "center",
       flexDirection: "column",
       textAlign: "center",
       color: "gray",
     }}
   >
     <p>
       Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
       Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
       tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
       fringilla massa. Etiam hendrerit dolor eget rutrum
     </p>
     <p style={{ fontStyle: "italic", marginTop: 25 }}>
       <span style={{ fontWeight: 500, color: "rgb(2, 66, 155" }}>PAULA WILSON</span>
     </p>
   </div>
 );
};


export default Testimonies;