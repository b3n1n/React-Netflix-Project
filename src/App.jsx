import React from "react";
import HomePage from "./pages/HomePage";
import About from './pages/About';
import Price from './pages/Price';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element= {<HomePage></HomePage>}></Route>
          <Route path="/about" element= {<About></About>}></Route>
          <Route path="/contact" element= {<Contact></Contact>}></Route>
          <Route path="/price" element= {<Price></Price>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
