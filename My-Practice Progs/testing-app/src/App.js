// import { useState } from "react";
function App() {
  const bgChange = ()=>{
    const bgDiv = document.getElementById('bgDiv');
  }
  return (
    <>
      <div id="bgDiv"></div>
      <button onClick={() => (bgChange)}></button>
    </>
  );
}

export default App;