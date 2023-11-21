import React, { useReducer } from 'react'

const 

const UseReducer = () => {
    useReducer(reducer,initState)
    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
        </div>
    )
}

export default UseReducer
