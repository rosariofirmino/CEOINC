import React from "react";
import Navbar from "./components/navbar.js";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact />
      </Routes>
    </Router>

    </>
  );
}

export default App;
