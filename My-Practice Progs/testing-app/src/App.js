import { useState } from "react";

function App() {
  const [colors, setColors] = useState(['red', 'yellow', 'green', 'blue', 'black'])
  return (
    <div width={100} style={{}} id="bgcolor">
      <button onClick={() => (colors.map(color => setColors(color)))}>Click Me</button>
    </div>
  );
}

export default App;
