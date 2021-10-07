import React, { useState } from 'react';

const Digital = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime, 1000);

    return (
        <>
            <div className="content">
                <h1> {ctime} </h1>
            </div>
        </>
    )
}

export default Digital;