/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
import Add_categories from './pages/Add_categories';
import Manage_categories from './pages/Manage_categories';
import Manage_user from './pages/Manage_user';
import Manage_product from './pages/Manage_product';
import Add_product from './pages/Add_product';
import Add_Blog from './pages/Add_Blog';
import Manage_Order from './pages/Manage_Order';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index path="/login" element={ <><Login/></> }></Route> */}
        <Route exact path="/" element={<><Header /> <Dashboard /> <Footer /></>}></Route>
        <Route exact path="/manage_categories" element={<><Header /> <Manage_categories /> <Footer /></>}></Route>
        <Route exact path="/add_categories" element={<><Header /> <Add_categories /> <Footer /></>}></Route>
        <Route exact path="/manage_product" element={<><Header /> <Manage_product /> <Footer /></>}></Route>
        <Route exact path="/add_product" element={<><Header /> <Add_product /> <Footer /></>}></Route>
        <Route exact path="/manage_order" element={<><Header /> <Manage_Order /> <Footer /></>}></Route>
        <Route exact path="/manage_user" element={<><Header /> <Manage_user /> <Footer /></>}></Route>
        <Route exact path="/add_blog" element={<><Header /> <Add_Blog /> <Footer /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
