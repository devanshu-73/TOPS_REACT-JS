import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import About from './Component/About';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar /><Home /><Footer /></>}></Route>
          <Route path='/about' element={<><Navbar /><About /><Footer /></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
