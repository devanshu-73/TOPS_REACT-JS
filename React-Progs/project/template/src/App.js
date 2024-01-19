/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from "./Pages/Home";
import Footer from "./Comps/Footer";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Room from "./Pages/Room";
import Team from "./Comps/Team";
import Contact from "./Pages/Contact";
import Header from "./Comps/Header";
import Booking from "./Pages/Booking";
import OurTeam from "./Pages/OurTeam";
import Testimonial from "./Pages/Testimonial";
import SignUp from "./Pages/SignUp";
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Header />
      <Routes>
        <Route index exact path="/" element={<>  <Home /> <Team />   </>}></Route>
        <Route exact path="/about" element={<>  <About /> <Team />   </>}></Route>
        <Route exact path="/service" element={<>  <Service /> <Team />   </>}></Route>
        <Route exact path="/rooms" element={<>  <Room />   </>}></Route>
        <Route exact path="/booking" element={<>  <Booking />   </>}></Route>
        <Route exact path="/team" element={<>  <OurTeam />   </>}></Route>
        <Route exact path="/testimonial" element={<>  <Testimonial />   </>}></Route>
        <Route exact path="/contact" element={<>  <Contact />   </>}></Route>
        <Route exact path="/signup" element={<>  <SignUp />   </>}></Route>
        <Route exact path="/login" element={<>  <Login />   </>}></Route>
        <Route exact path="/profile" element={<><Profile />  </>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
