import './App.css'
function App() {
  const bgChange = (e) => {
    // console.log(e.target.backgroundColor=e.target.innerText);
    document.body.style.backgroundColor = e.target.innerText;
    if (e.target.innerText === 'Yellow') {
      document.getElementById('h1').style.color = "black";

    }
    else {
      document.getElementById('h1').style.color = "white";
    }
  }
  return (
    <>
      <div className="flex">
        <h1 id='h1'>Bg Changer</h1>
        <div>
          <button className='btn' onClick={bgChange}>Red</button>
          <button className='btn' onClick={bgChange}>Black</button>
          <button className='btn' onClick={bgChange}>Yellow</button>
          <button className='btn' onClick={bgChange}>Blue</button>
          <button className='btn' onClick={bgChange}>Orange</button>
          <button className='btn' onClick={bgChange}>Green</button>
        </div>
      </div>
    </>
  );
}

export default App;
