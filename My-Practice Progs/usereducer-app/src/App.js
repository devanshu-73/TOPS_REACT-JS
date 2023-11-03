import { useState } from "react";

// import { toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      {/* <button onClick={() => (toast.success("hello"))}>Click</button> */}
      <button onClick={() => setCount((count) => count - 1)}><h1>-</h1></button>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}><h1>+</h1></button>
    </div>
  );
}

export default App;
