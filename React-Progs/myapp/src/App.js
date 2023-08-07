// import logo from './logo.svg';
import './App.css';
import Card from './Card';
function App() {
  let titleArr = ["ABC", "dev", "Jay", "tirth", "XYZ"]
  return (
    <>
      {/* -------------------------------------------------------------------------- */}
      <div className="container d-flex">
        {/* Hard coding... */}
        {/* <Card title="ABC" />
        <Card title="dev" />
        <Card title="Jay" />
        <Card title="tirth" />
        <Card title="XYZ" /> */}

        {/* -------------------------------------------------------------------------- */}
        {/* Smart Coding */}
        {titleArr.map((val) => (
          <Card title={val} />
        ))}

      </div>
    </>
  );
}

export default App;
