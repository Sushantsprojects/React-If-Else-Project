import React from 'react';
import Cards from './Cards';
import "./index.css";
import Sdata from "./Sdata";

const Buggati = () => {
    return (
        <Cards
            key={Sdata[0].id}
            imgsrc={Sdata[0].imgsrc}
            cardname={Sdata[0].cardname}
            details={Sdata[0].details}
        />
    );

}

export default Buggati;