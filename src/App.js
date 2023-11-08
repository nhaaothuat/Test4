import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom'
// import "./App.scss";
// import Button from "./components/button/Button";

// import Banner from "./components/banner/banner";
// import CallUs from "./components/CallUs/footer";
// import Card from "./components/carrd/Card";
// import Banner2 from "./components/banner2/banner2";
 import Signin from "./components/signin/signin";

// import SignUp from "./components/signup/signup";
// import Counter from "./components/Counter";
// import store from "./shared/store";
// import { Provider } from "react-redux";

// import Slider from "./components/slider/slider";
// import Instructor from "./components/Instructors/instructor";
// import vetor from "../src/assets/images/demo/Vector.png";
// import Review from "./components/Reviews/review";
//  import Navbar from "./components/navbar/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Frame from "./components/Frame/Frame";
// import CardL from "./components/CardL/CardL";
import HomePage from "./components/hompage/HomePage";
import PrivateRouter from "./components/private-router/PrivateRouter.js"
import TeacherPortal from "./pages/teacherportal"
import Option1 from './pages/Option1'
import Option2 from './pages/Option2' 
import Option3 from './pages/Option3'
import Option4 from './pages/Option4'
import Option5 from './pages/Option5'
import Option6 from './pages/Option6'

function App() {
  let location = useLocation();
  return (
    
    <Routes location={location}>
         <Route path="/" Component={HomePage}></Route>
         <Route path="/teacher-portal" element={
              <PrivateRouter>
                <TeacherPortal />
              </PrivateRouter > 
            }>
              <Route path="/teacher-portal/option1" element={<Option1 />} />
            <Route path="/teacher-portal/option2" element={<Option2 />} />
            <Route path="/teacher-portal/option3" element={<Option3 />} />
            <Route path="/teacher-portal/option4" element={<Option4 />} />
            <Route path="/teacher-portal/option5/:id" element={<Option5 />} />
            <Route path="/teacher-portal/option6" element={<Option6 />} />
            </Route>
            
            <Route path="/login" Component={Signin} />
            <Route path="/*" Component={() => <div>Not Found</div>} />
    </Routes>

  );
}

export default App;
