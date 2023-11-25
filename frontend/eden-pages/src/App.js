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
import Weather from "./components/Weather.js";
import Weather2 from "./components/ReactWeather.js";

function App() {
  return (
  <div>
   <Weather/>
  </div>
  );
}


export default App;
