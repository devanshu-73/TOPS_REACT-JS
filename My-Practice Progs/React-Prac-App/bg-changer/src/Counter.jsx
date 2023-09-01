import React,{ useState } from "react"
const Counter = () => {
    const [state, setstate] = useState(0);
    const add =()=>{
        
    }
  return (
    <div>
        <button onClick={minus} style={{marginRight: 10}}>-</button><span>{state}</span><button onClick={add} style={{marginLeft: 10}}>+</button>
    </div>
  )
}

export default Counter
