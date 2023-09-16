// import { useState } from "react";
function App() {
  // const [color, setColor] = useState(['red', 'blue', 'green', 'black'])
  const bgChange = () => {
    console.log("hello");
    // const bgDiv = document.getElementById('bgDiv');
    // for (let i = 0; i < color.length; i++) {
    //   bgDiv.style.backgroundColor = setColor(color[i]);
    // }
  }
  return (
    <>
      <div id="bgDiv" style={{ width: '100px', height: '100px', border: '1px solid black' }}></div>
      <button onClick={() => (bgChange())}> click</button>
    </>
  );
}

export default App;