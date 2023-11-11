/* eslint-disable react/jsx-pascal-case */
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import User from "./Pages/User";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Manage_user from './Pages/Manage_user';
import BothUser from './Pages/BothUser';
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><User /><Footer /></>}></Route>
          <Route path="/manageuser" element={<><Header /><Manage_user /><Footer /></>}></Route>
        </Routes>
      </BrowserRouter> */}
      <BothUser />
    </>
  );
}

export default App;
