import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Compo/Header";
import Footer from './Compo/Footer';
import Sidebar from './Compo/Sidebar';
import Main from './Pages/Main';
// import Index2 from './Pages/Index2';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<>
          <Header />
          <Sidebar /><Main />
          <Footer />
        </>}></Route>

        {/* <Route exact path="/index2" element={<>
          <Header />
          <Index2 />
          <Footer />
        </>}></Route> */}

      </Routes>
    </BrowserRouter >

  );
}

export default App;
