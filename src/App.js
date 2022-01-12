import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={null} />
        <Route exact path="/home" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
      </Routes>
    </div>
  );
}

export default App;
