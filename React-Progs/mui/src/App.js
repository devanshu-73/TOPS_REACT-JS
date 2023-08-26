import Button from '@mui/material/Button';
import StyledComp from './Styled_Comp';
function App() {
  let text1 = ["hello", "frew", "rv", "btrbr", "vrr"];
  let color1 = ["yellow", "white", "red", "blur", "orange"];
  return (
    <>
      <Button variant="contained" color="primary">
        jcjejc
      </Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <hr />
      {
        text1.map((val, index) => (
          color1.map((item) => (
            console.log(val, item)
          ))
        ))}
    </>
  );
}

export default App;
