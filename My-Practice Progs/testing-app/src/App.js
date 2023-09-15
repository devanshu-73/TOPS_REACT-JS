import { useState } from "react";

function App() {
  const [colors, setColors] = useState(['red', 'yellow', 'green', 'blue', 'black'])
  return (

    <>
      <div width={100} style={{ backgroundColor: { colors } }} id="bgcolor">
      </div>
      <button onClick={colors.map(color => setColors(color))}>Click Me</button>
    </>
  );
}

export default App;