import React, {useState} from 'react'
import HeroSection from '../components/Hero'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/infoSection'
import FooterSection from '../components/Footer'
import About from '../components/About'
import { SliderData, SecondSliderData } from '../components/infoSection/SliderData'
import { homeObjOne, homeObjTwo } from '../components/infoSection/data'
import { Background } from './BgElements'
import BG from '../images/ceobg.png'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  const [BG,setBG] = useState(false);

  const changeBg = () => {
      if (window.scrollY >=1000){
          setNavbar (true);
      }else{
          setNavbar (false);
      }
  }

  window.addEventListener('scroll', changeBg);
  return (
    <> 
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <Background src={BG}/>
        <InfoSection{...homeObjOne}slides={SliderData}/>
        <About/>
        <InfoSection{...homeObjTwo}slides={SecondSliderData}/>
        <FooterSection/>
        
    </>
  )
}

export default Home