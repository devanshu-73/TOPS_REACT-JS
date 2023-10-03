import React from 'react';

const Lists = () => {
    let items = [
        "devanshu",
        "chauhan",
        "Yash",
        "sahil"
    ];
    // items = [];  
    return (
        <div>
            <h1>List</h1>
            {items.length === 0 ? (
                <p>Nothing to display...</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li style={{ textTransform: 'none' }} onClick={() => (console.log(item + ' clicked'))} key={index}>{index}: {item}</li>
                    ))}
                </ul>
            )
            }
        </div >
    );
}

export default Lists;
