/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react'
import Func_Img from './Func_Img';

const Func_Life = () => {

  const [isImage, setisImage] = useState(true);
  const [number, setnumber] = useState(0);

  useEffect(() => {
    console.log('didmount/update');
  }, [number]);

  return (
    <div className='container mt-5'>
      <button onClick={() => setnumber(number + 1)}>+</button>
      <h1>{number}</h1>
      <button onClick={() => setnumber(number - 1)}>-</button>
      <hr />
      <button onClick={() => setisImage(false)}>Hide</button>
      <button onClick={() => setisImage(true)}>Show</button>
      {
        isImage ? <Func_Img /> : null
      }
    </div>
  )
}

export default Func_Life
