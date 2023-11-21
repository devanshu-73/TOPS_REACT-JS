import React, { useReducer } from 'react'

const initState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state += 1;
        case "decrement":
            return state -= 1;
        default:
            return state;
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState);
    return (
        <div className='w-100 mt-5 d-flex border border-5 flex-column justify-content-center align-items-center'>
            <div className='text-center'>Count : {count}</div>
            <div >
                <button className='btn btn-primary' onClick={() => dispatch("increment")}>Increment</button>
                <button className='btn btn-primary' onClick={() => dispatch("decrement")}>Decrement</button>
            </div>
        </div>
    )
}

export default UseReducer
