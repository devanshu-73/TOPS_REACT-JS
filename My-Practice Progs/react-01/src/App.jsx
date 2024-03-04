
import { useState } from 'react';
const App = () => {
  const [count,setCount] = useState(0);
  return (
    <>
        <button onClick={()=>setCount(count-1)}>-</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}

export default App
