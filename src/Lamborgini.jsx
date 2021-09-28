import React from 'react';
import Cards from './Cards';
import "./index.css";
import Sdata from "./Sdata";

const Lamborgini = () => {
    return (
        <Cards
            key={Sdata[1].id}
            imgsrc={Sdata[1].imgsrc}
            cardname={Sdata[1].cardname}
            details={Sdata[1].details}
        />
    );

}

export default Lamborgini;