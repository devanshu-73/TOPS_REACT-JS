import React, { useReducer } from 'react';
import { counterReducer, initValue } from './Counter-Reducer';
const Counter = () => {
    const [count, dispatch] = useReducer(counterReducer, initValue)
    return (
        <div className='w-50 border border-3 mx-auto'>
            <div className='text-center'><h1>{count}</h1></div>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn btn-primary' onClick={() => dispatch("decrement")}>Decrement</button>
                <button className='btn btn-primary' onClick={() => dispatch("increment")}>Increment</button>
            </div>
        </div>
    )
}

export default Counter
