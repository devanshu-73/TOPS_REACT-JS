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
        <div>
            <div>Count : {count}</div>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
        </div>
    )
}

export default UseReducer
