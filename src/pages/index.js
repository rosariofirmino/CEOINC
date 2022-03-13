import React, {useState} from 'react'
import HeroSection from '../components/Hero'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/infoSection'
import FooterSection from '../components/Footer'
import Contact from '../components/Contact'
import About from '../components/About'
import { SliderData, SecondSliderData } from '../components/infoSection/SliderData'
import { homeObjOne, homeObjTwo } from '../components/infoSection/data'
import { Background } from './BgElements'
import BG from '../images/ceobg.png'
import { Parallax } from 'react-parallax'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <> 
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <Parallax bgImage={BG}/>
        <InfoSection{...homeObjOne}slides={SliderData}/>
        <About/>
        <InfoSection{...homeObjTwo}slides={SecondSliderData}/>
        <Contact />
        <FooterSection/>
        
    </>
  )
}

export default Home