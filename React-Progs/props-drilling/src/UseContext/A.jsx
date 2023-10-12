import React, { useState, createContext } from 'react';
import B from './B'
export const Acontext = createContext();
const A = () => {
    const [demoname, setDemoname] = useState("Demo Name");
    return (
        <div>
            <Acontext.Provider value={{ demoname, setDemoname }}>
                <button onClick={() => { setDemoname("Devanshu") }}>Change A</button>
                <h1>        Name A :{demoname}</h1>
                <B />
            </Acontext.Provider>
        </div>
    )
}

export default A
