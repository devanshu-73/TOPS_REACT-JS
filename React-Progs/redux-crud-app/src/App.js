/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./features/website/component/Header";
import Footer from "./features/website/component/Footer";
import Dashboard from "./features/website/pages/Dashboard";
import Manage_data from "./features/website/pages/Manage_data";
import Add_data from "./features/website/pages/Add_data";
import Contact from "./features/website/pages/Contact";
import Manage_contact from "./features/website/pages/Manage_contact";



function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" index element={<><Header /><Dashboard /><Footer /></>}></Route>
        <Route path="/add_data" element={<><Header /><Add_data /><Footer /></>}></Route>
        <Route path="/manage_data" element={<><Header /><Manage_data /><Footer /></>}></Route>
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>}></Route>
        <Route path="/manage_contact" element={<><Header /><Manage_contact /><Footer /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
