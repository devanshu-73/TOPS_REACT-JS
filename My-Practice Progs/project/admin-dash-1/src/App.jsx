import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Comp/Sidebar'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Sidebar /></>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
