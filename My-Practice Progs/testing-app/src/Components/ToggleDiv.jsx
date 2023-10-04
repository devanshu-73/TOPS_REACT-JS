import React, { useState } from 'react'

const ToggleDiv = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <>
            <div>
                <button onClick={toggleVisibility}>Toggle Div</button>
                {isVisible && <div style={{border:'1px solid black'}}>This div is visible or Not.</div>}
            </div>
        </>
    )
}

export default ToggleDiv
