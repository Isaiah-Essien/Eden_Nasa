import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from "./routes/AboutPage.js";
import FaqPage from "./routes/FaqPage.js";
import HomePage from "./routes/HomePage.js";
import MarketPage from "./routes/MarketPage.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InsideCart from "./components/InsideCart.js";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/MarketPage" element={<MarketPage/>} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/FaqPage" element={<FaqPage />} />
        <Route path="/InsideCart" element={<InsideCart/>} />
      </Routes>
    </Router>
  );
}

export default App;
