import React, { useContext } from 'react'
import { Acontext } from './A'
const E = () => {
    const { demoname, setDemoname } = useContext(Acontext);
    return (
        <div>
            <h1>Name E:{demoname}</h1>
            <button onClick={() => { setDemoname("Chauhan") }}>Change E</button>
        </div>
    )
}

export default E
