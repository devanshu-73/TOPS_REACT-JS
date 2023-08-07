// import logo from './logo.svg';
import './App.css';
import Card from './Card';
function App() {
  let titleArr = ["ABC", "dev", "Jay", "tirth", "XYZ"]
  return (
    <>
      <div className="container d-flex">
      
        {/* <Card title="ABC" />
        <Card title="dev" />
        <Card title="Jay" />
        <Card title="tirth" />
        <Card title="XYZ" /> */}
        {titleArr.map((val) => (
          <Card title={val} />
        ))}

      </div>
    </>
  );
}

export default App;
