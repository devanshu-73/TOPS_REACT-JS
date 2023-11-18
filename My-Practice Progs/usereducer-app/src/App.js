/* eslint-disable react/jsx-pascal-case */
// import Header from './Components/Header';
// import User from "./Pages/User";
// import Footer from './Components/Footer';
// import Manage_user from './Pages/Manage_user';
// import BothUser from './Pages/BothUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header2 from './Components/Header2';
import PostUser from './Pages/PostUser';
import ManagePost from './Pages/ManagePost';

function App() {

  return (

    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><User /><Footer /></>}></Route>
          <Route path="/manageuser" element={<><Header /><Manage_user /><Footer /></>}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <BothUser /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header2 /><PostUser /></>}></Route>
          <Route path='/manage' element={<><Header2 /><ManagePost /></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
