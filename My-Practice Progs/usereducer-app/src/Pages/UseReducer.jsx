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
            <div className='text-center'><h1>{count}</h1></div>
            <div >
                <button className='btn btn-primary me-3' onClick={() => dispatch("decrement")}>Decrement</button>
                <button className='btn btn-primary ms-3' onClick={() => dispatch("increment")}>Increment</button>
            </div>
        </div>
    )
}

export default UseReducer
