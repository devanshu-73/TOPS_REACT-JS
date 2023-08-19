import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Login";
import AddCategory from './Page/AddCategory';
import AddProduct from './Page/AddProduct';
import AddBlog from './Page/AddBlog';
import ManageUser from './Page/ManageUser';
import ManageOrder from './Page/ManageOrder';
import Logout from './Page/Logout';
import ManageProduct from './Page/ManageProduct';
import ManageBlog from './Page/ManageBlog';
import Error from './Page/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Login/></>}></Route>
        <Route path="/dashboard" element={<><Header/> <Dashboard/> <Footer/> </>}></Route>
        <Route path="/addCategory" element={<><Header/> <AddCategory/> <Footer/></>}></Route>
        <Route path="/addProduct" element={<><Header/> <AddProduct/> <Footer/></>}></Route>
        <Route path="/addBlog" element={<><Header/> <AddBlog/> <Footer/></>}></Route>
        <Route path="/manageUser" element={<><Header/> <ManageUser/> <Footer/></>}></Route>
        <Route path="/manageOrder" element={<><Header/> <ManageOrder/> <Footer/></>}></Route>
        <Route path="/logout" element={<><Header/> <Logout/> <Footer/></>}></Route>
        <Route path="/manageProduct" element={<><Header/> <ManageProduct/> <Footer/></>}></Route>
        <Route path="/manageBlog" element={<><Header/> <ManageBlog/> <Footer/></>}></Route>
        <Route path="/error" element={<><Error/></>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
