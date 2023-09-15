import { useState } from "react";

function App() {
  const [colors, setColors] = useState(['red', 'yellow', 'green', 'blue', 'black'])
  return (
    <div width={100} id="bgcolor">
      <button onClick={style = {
        colors.map(color => setColors(color))
      }}>Click</button>
    </div>
  );
}

export default App;
