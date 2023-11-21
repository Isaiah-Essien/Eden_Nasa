import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navibar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Banner from "./components/Banner.js"
import About from "./components/About";
import Services from "./components/Services"
import Blogs from "./components/Blogs"
function App() {
  return (
  <div>
   <Navibar/>
   <Banner/>
   <About/>
   <Services/>
   <Blogs/>
   <Footer/>
  </div>
  );
}


export default App;
