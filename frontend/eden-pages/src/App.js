import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navibar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Banner from "./components/HomePage/Banner.js"
import About from "./components/HomePage/About";
import Services from "./components/HomePage/Services.js"
import Blogs from "./components//HomePage/Blogs.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from "./components/AboutPage/AboutPage.js";

function App() {
  return (
    <Router>
  <div>
   <AboutPage/>
   <Routes>
          <Route path="./AboutPage/AboutPage.js" component={AboutPage} />
        </Routes>
  </div>
  </Router>
  );
}


export default App;
