import React,{useEffect, useState} from 'react'
import Func_img from './Func_img';

function Func_life() {

    const [isImage,setisImage]=useState(true);
    const [number,setnumber]=useState(0);

  useEffect(()=>{
    console.log('didmount/update');
  },[number]);  

  return (
    <div className='container mt-5'>
        <button onClick={()=>setnumber(number+1)}>+</button>
        <h1>{number}</h1>
        <button onClick={()=>setnumber(number-1)}>-</button>
        <hr />
        <button onClick={()=>setisImage(false)}>Hide</button>
        <button onClick={()=>setisImage(true)}>Show</button>
        {
            isImage?<Func_img/> : null
        }
    </div>
  )
}

export default Func_life