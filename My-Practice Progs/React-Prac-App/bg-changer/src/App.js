import { useState } from 'react';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const bgChange = (e) => {
    const colorName = e.target.innerText;
    
    if (colorName === selectedColor) {
      setSelectedColor(null);
      document.body.style.backgroundColor = 'white';
      document.getElementById('h1').style.color = 'black';
    } else {
      setSelectedColor(colorName);
      document.body.style.backgroundColor = colorName;
      document.getElementById('h1').style.color = 'white';
    }
  };

  const getButtonClassName = (color) => {
    return `btn${selectedColor === color ? ' selected' : ''}`;
  };

  return (
    <>
      <div className="flex">
        <h1 id="h1">Bg Changer</h1>
        <div>
          <button className={getButtonClassName('Red')} onClick={bgChange}>
            Red
          </button>
          <button className={getButtonClassName('Green')} onClick={bgChange}>
            Green
          </button>
          <button className={getButtonClassName('Blue')} onClick={bgChange}>
            Blue
          </button>
          <button className={getButtonClassName('Violet')} onClick={bgChange}>
            Violet
          </button>
          <button className={getButtonClassName('Yellow')} onClick={bgChange}>
            Yellow
          </button>
          <button className={getButtonClassName('Orange')} onClick={bgChange}>
            Orange
          </button>
          <button className={getButtonClassName('Black')} onClick={bgChange}>
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
