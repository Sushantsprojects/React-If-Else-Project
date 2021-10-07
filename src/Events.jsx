import React,{ useState } from 'react';

const Events = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setname] = useState("Click Me");

    const bgChange =() => {
        let newBg = "#34495e";
        setBg(newBg);
        setname("Ouch! 😒");
    }

    const bgClick = () => {
        setBg(purple);
        setname("Thank You! 😃");
    }

    return (
        <>
        <div style = { {backgroundColor : bg , height: "10rem",borderRadius: "0.8rem"} } >
            <button style = { {marginTop: "3.5rem"}} className ="button" onClick = {bgChange} onDoubleClick = {bgClick} > {name} </button>
        </div>
        </>
    );
}

export default Events;