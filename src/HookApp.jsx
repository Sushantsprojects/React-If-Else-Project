import React, { useState } from 'react';

const HookApp = () => {
    const state = useState();

    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    };
    const DecNum = () => {
        setCount(count - 1);
    };

    return (
        <>
            <div className="content">
                <h1> {count} </h1>
                <button className="button" onClick={IncNum}> Increase Number </button>
                <button className="button" onClick={DecNum}> Decrease Number </button>
            </div>
        </>
    )
}


export default HookApp;