import React from "react";
import Navbar from "./compo/Navbar";
import About from "./page/About";
import Services from "./page/Services";
import Portfolio from "./page/Portfolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Error from "./page/Error";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
