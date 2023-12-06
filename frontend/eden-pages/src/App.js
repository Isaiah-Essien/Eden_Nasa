import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from "./routes/AboutPage.js";
import FaqPage from "./routes/FaqPage.js";
import HomePage from "./routes/HomePage.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./routes/ContactPage.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/FaqPage" element={<FaqPage />} />
        <Route path="/ContactPage" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;