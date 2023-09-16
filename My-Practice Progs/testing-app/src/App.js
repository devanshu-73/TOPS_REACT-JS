import { useState } from "react";
function App() {

  const bgChange = ()=>{
    const bgDiv = document.getElementById('bgDiv');
  }
  return (
    <>
      <div id="bgDiv" style={{backgroundColor:}}></div>
      <button onClick={() => (bgChange)}></button>
    </>
  );
}

export default App;