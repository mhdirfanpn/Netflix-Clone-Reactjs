import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import {action,originals,adventure,animation,comedy,thriller,drama,crime} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={animation} title='animation' isSmall />
      <RowPost url={adventure} title='adventure' isSmall/>
      <RowPost url={comedy} title='comedy' isSmall />
      <RowPost url={thriller} title='thriller' isSmall />
      <RowPost url={drama} title='drama' isSmall/>
      <RowPost url={crime} title='crime' isSmall />
      <Footer/>
    </div>
  );
}

export default App;
