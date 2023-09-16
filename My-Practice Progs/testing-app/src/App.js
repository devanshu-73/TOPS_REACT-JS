import { useState } from "react";
function App() {
  const [color, setColor] = useState(['red', 'blue', 'green', 'black'])
  const bgChange = () => {
    const bgDiv = document.getElementById('bgDiv');
    for (let i = 0; i < color.length; i++) {
      bgDiv.style.backgroundColor = color[i];
    }
  }
  return (
    <>
      <div id="bgDiv" style={{ backgroundColor:}}></div>
      <button onClick={() => (bgChange)}></button>
    </>
  );
}

export default App;