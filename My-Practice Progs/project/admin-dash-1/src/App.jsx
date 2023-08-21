import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Comp/Sidebar';
import Home from './Comp/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Sidebar /><Home /></>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
