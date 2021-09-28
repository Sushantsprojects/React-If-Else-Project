import React from 'react';
import "./index.css";
import Footer from './Footer';
import Buggati from './Buggati';
import Lamborgini from './Lamborgini';



const favcar = "Buggati";

const Favs = () => {
  if (favcar === "Buggati") {
    return (
      <Buggati />
    );
  } else {
    return (
      <Lamborgini />
    );

  }
}


const App = () => (
  <>
    <h1 className="header"> 🚗  Top 3 Super Cars  🚗</h1>
    <Favs />

    <Footer />
  </>
);

export default App;