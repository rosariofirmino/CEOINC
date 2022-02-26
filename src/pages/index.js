import React, {useState} from 'react'
import HeroSection from '../components/Hero'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/infoSection'
import FooterSection from '../components/Footer'
import About from '../components/About'
import { homeObjOne } from '../components/infoSection/data'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection{...homeObjOne}/>
        <About/>
        <FooterSection/>
    </>
  )
}

export default Home