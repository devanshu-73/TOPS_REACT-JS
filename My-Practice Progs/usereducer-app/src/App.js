import { toast } from 'react-toastify';
function App() {
  return (
    <>
      <div>Hello </div>
      <button onClick={() => (toast.success("hello"))}>Click</button>
    </>
  );
}

export default App;
