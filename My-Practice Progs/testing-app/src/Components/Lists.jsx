import React from 'react'

const Lists = () => {
    const items = [
        "DEVANSHU",
        "chauhan",
        "Yash"
    ];
    return (
        <>
            <div>
                <h1 >List</h1>
                <ul>
                    {items.map((item, index) => (
                        <li style={{ textTransform: 'none' }} key={index} type='none'>{index}:{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Lists
