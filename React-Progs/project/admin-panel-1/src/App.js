import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Comp/Header";
import Footer from "./Comp/Footer";
import Main from "./Page/Main";
import Form from "./Page/Form";
import Table from "./Page/Table";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Header /><Main /><Footer /></>}
        ></Route>
        <Route exact path="/form" element={<><Header /><Form /><Footer /></>}
        ></Route>
        <Route exact path="/table" element={<><Header /><Table /><Footer /></>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
