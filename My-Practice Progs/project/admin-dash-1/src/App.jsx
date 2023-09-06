import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Foot from './Comp/Foot';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Foot /></>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
