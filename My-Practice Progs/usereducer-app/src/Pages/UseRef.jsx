// import React, { useState } from 'react';
import { useEffect, useRef } from 'react';

const UseRef = () => {
    const refInput = useRef();
    useEffect(() => {
        refInput.current.va;
    }, [])
    // const [name, setName] = useState("dev");
    return (
        <div>
            {/* {refInput.current} */}
            {/* {console.log(refInput.current)} */}
            {/* {console.log(setName("devanshu"))} */}
            <input type="text" ref={refInput} onChange={(e) => (e.target.value)} />
            {/* <div>{name}</div> */}
            {/* <button onClick={() => setName("devanshu")}>Click</button> */}
        </div>
    )
}

export default UseRef
