import Navbar from './Navbar';
import Card from './Card';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://api.slingacademy.com/v1/sample-data/photos')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <div className='d-flex container'>
          {data.map(item => (
            <Card  /> 
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
