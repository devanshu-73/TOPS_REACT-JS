import React, { useReducer } from 'react';
import { initState, reducer } from './Reducer';

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div className="container mt-5">
            <div className="card w-50 mx-auto">
                <div className="card-body text-center">
                    <h1 className="card-title">{count}</h1>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary me-3" onClick={() => dispatch("decrement")}>
                            Decrement
                        </button>
                        <button className="btn btn-primary ms-3" onClick={() => dispatch("increment")}>
                            Increment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;
