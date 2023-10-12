/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

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

// Initialize Firebase with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnjIDq42KiDEUW5-TB5ro1WM9m3WIxK_M",
  authDomain: "devsite-hotel.firebaseapp.com",
  databaseURL: "https://devsite-hotel-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "devsite-hotel",
  storageBucket: "devsite-hotel.appspot.com",
  messagingSenderId: "719966390830",
  appId: "1:719966390830:web:27283531e35539dcc42dbf",
  measurementId: "G-RENF6XXVML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const yourFirebaseDatabaseRef = ref(db, 'users'); // Replace 'users' with your desired database location

function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route index exact path="/" element={<>  <Header /><Home /> <Team />   <Footer /></>}></Route>
        <Route exact path="/about" element={<>  <Header /><About /> <Team />   <Footer /></>}></Route>
        <Route exact path="/service" element={<>  <Header /><Service /> <Team />  <Footer /> </>}></Route>
        <Route exact path="/rooms" element={<> <Header /> <Room />  <Footer /> </>}></Route>
        <Route exact path="/booking" element={<> <Header /> <Booking />  <Footer /> </>}></Route>
        <Route exact path="/team" element={<>  <Header /><OurTeam />   <Footer /></>}></Route>
        <Route exact path="/testimonial" element={<> <Header /> <Testimonial />  <Footer /> </>}></Route>
        <Route exact path="/contact" element={<>  <Header /><Contact />  <Footer /> </>}></Route>
        <Route exact path="/signup" element={<> <Header /> <SignUp />   <Footer /></>}></Route>
        <Route exact path="/login" element={<>  <Header /><Login />  <Footer /> </>}></Route>
        <Route exact path="/profile" element={<><Header /><Profile />  <Footer /></>}></Route>
        <Route exact path="/header2" element={<><Header /><h2 className="d-flex justify-content-center align-items-center mt-5">LogOut Successfully</h2><Footer /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
