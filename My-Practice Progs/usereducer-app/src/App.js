import { useState } from "react";

// import { toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <button onClick={() => (toast.success("hello"))}>Click</button> */}
      <div>{count}</div>
      <button onClick={setCount((count) => count + 1)}></button>
    </>
  );
}

export default App;
