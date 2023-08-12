import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Comps/Footer"
import About from "./Pages/About";
import Service from "./Pages/Service";
import Room from "./Pages/Room";
import Contact from "./Pages/Contact";
import Header from "./Comps/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /> <Home /> <Footer /></>}></Route>
          <Route path="/about" element={<><Header /> <About /> <Footer /></>}></Route>
          <Route path="/service" element={<><Header /> <Service /> <Footer /></>}></Route>
          <Route path="/contact" element={<><Header /> <Contact /> <Footer /></>}></Route>
          <Route path="/rooms" element={<><Header /> <Room /> <Footer /></>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
