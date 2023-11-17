import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navibar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Banner from "./components/Banner.js"

function App() {
  return (
  <div>
   <Navibar/>
   <Banner/>
   <Footer/>
  </div>
  );
}


export default App;
