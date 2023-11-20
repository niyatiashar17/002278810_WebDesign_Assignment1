import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/About";
import Jobs from "./Components/Jobs";
import LoginPage from "./Components/Login";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
