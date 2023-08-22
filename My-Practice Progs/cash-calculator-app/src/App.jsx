import { useState } from "react";

function App() {
  const [note2000Value, setNote2000Value] = useState(0);
  const [rs2000Content, setRs2000Content] = useState(0);

  const show = (event) => {
    const inputValue = event.target.value;
    setNote2000Value(inputValue);
    setRs2000Content(inputValue * 2000);
  };

  return (
    <div>
      <input type="number" id="note-2000" placeholder={note2000Value} onKeyUp={show} />
      <div id="rs2000">{rs2000Content}</div>
    </div>
  );
}

export default App;
