import { toast } from 'react-toastify';
function App() {
  return (
    <>
      <button onClick={() => (toast.success("hello"))}>Click</button>
    </>
  );
}

export default App;
