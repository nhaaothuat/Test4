import React from 'react'
import Slider from "../../components/slider/slider";
import Instructor from "../../components/Instructors/instructor";
import vetor from "../../assets/images/demo/Vector.png";
import Review from "../../components/Reviews/review";
 import Navbar from "../../components/navbar/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Frame from "../../components/Frame/Frame";
import CardL from "../../components/CardL/CardL";
import Banner from "../../components/banner/banner";
import CallUs from "../../components/CallUs/footer";
import Card from "../../components/carrd/Card";
import Banner2 from "../../components/banner2/banner2";
// import Vetor from "../../assets/images/demo/Vector.png";
import "./hompagage.scss";
// import Signin from "../signin/signin.js";

export default function HomePage() {
  return (
     <div className="App">
     <Navbar />
    
     
   
      <Banner></Banner>
     <Frame />
     <Slider />
     <div className="container" id="card-info">
       <div className="card-info">
         <div className="card-info-content ">
           <h3>Most Popular courses</h3>
         </div>
         <div className="card-info-btn">
           <button>
             <img src={vetor} alt="" />
             Sort by
           </button>
         </div>
       </div>
       <div className="row ">
         <div className=" col-md-4 ">
           <div className="cardCss">
             <Card />
           </div>
         </div>
         <div className=" col-md-4 ">
           <div className="cardCss">
             <Card />
           </div>
         </div>
         <div className=" col-md-4 ">
           <div className="cardCss">
             <Card />
           </div>
         </div>
       </div>
       <br />
       <br />
       <div className="row">
         <div className=" col-md-4 ">
           <div className="cardCss">
             <Card />
           </div>
         </div>
         <div className=" col-md-4 ">
           <div className="cardCss">
             <Card />
           </div>
         </div>
         <div className=" col-md-4 ">
           <div className="cardCss">
             <Card />
           </div>
         </div>
       </div>
     </div>
     <CardL></CardL>
     <Banner2></Banner2>
     <Review />
     <Instructor />
     <CallUs></CallUs>
     <Footer /> 
   </div>
  )
}
