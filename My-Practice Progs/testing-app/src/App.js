import { useState } from "react";

function App() {
  const [colors, setColors] = useState(['red', 'yellow', 'green', 'blue', 'black'])
  const colorChange = () => {
    colors.map(color => setColors(color))
  }
  return (
    <div width={100}  style={{backgroundColor:}} id="bgcolor">
      <button onClick={colorChange}>Click Me</button>
    </div>
  );
}

export default App;
