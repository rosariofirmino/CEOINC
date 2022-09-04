import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './pages'
import {Background, BackgroundContainer} from './BgElements'
import BG from './images/ceobg-tile.png'
import {Parallax} from 'react-parallax'

function App() {
  const [offsetY,setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll, { passive: true })
  },[])
  return (
    <Router>
        <BackgroundContainer>
          <Background bg={BG} style={{transform: `translateY(${offsetY*.5}px)`}}/>
          <Home id='home' />
        </BackgroundContainer>
    </Router>
  );
}

export default App;
