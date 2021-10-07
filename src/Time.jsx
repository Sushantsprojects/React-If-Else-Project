import React, { useState } from 'react';

const Time = () => {
    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    };

    return (
        <>
            <div className="content">
                <h1> {ctime} </h1>
                <button className="button" onClick={UpdateTime}> CLICK ME </button>
            </div>
        </>
    )
}

export default Time;