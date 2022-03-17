import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './pages'
import { Background } from './BgElements'
import BG from './images/ceobg.png'
import { Parallax } from 'react-parallax'
function App() {
  const [offsetY,setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  return (
    <Router>
      <div style={{objectFit: 'cover'}}>
      <Background src={BG} style={{transform: `translateY(${offsetY*.5}px)`, objectFit: 'cover'}}/>
      </div>
      <Home />
    </Router>
  );
}

export default App;
