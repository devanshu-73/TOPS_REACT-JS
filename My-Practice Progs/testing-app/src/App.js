import { useState } from "react";

function App() {
  const [colors, setColors] = useState(['red', 'yellow', 'green', 'blue', 'black'])
  const colorChange = () => {
    colors.map(color => setColors(color))
  }
  return (

    <>
      <div width={100} style={{ backgroundColor:}} id="bgcolor">
      </div>
      <button onClick={colorChange}>Click Me</button>
    </>
  );
}

export default App;
