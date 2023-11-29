import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navibar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Banner from "./components/HomePage/Banner.js"
import About from "./components/HomePage/About";
import FaqPage from "./routes/FaqPage.js"
import Services from "./components/HomePage/Services.js"
import Blogs from "./components//HomePage/Blogs.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from "./routes/AboutPage.js";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/" element={<AboutPage />} />
				<Route path="/Project" element={<FaqPage />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</>
	)
}


export default App;
