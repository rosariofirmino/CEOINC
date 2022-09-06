import Icon1 from '../../images/ceoinclogo.png'
import React, { useState } from 'react'

import {FaBars, FaTwitter, FaFacebookF, FaLinkedin} from 'react-icons/fa'
import{NavLogoImg, Nav,NavbarContainer,NavLogo,MobileIcon,NavItem,NavLinks,NavMenu,NavBtn,NavBtnLink, NavBtnItem} from './NavbarElements'


function Navbar ({toggle}) {
    const [navbar,setNavbar] = useState(false);

    const changeBg = () => {
        if (window.scrollY >= 920){
            setNavbar (true);
        }else{
            setNavbar (false);
        }
    }

    window.addEventListener('scroll', changeBg);
  return (
    <>
        <Nav className={navbar ? 'active' : ''}>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavLogoImg src={Icon1}/>
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="expertise" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Expertise
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="spotlight" smooth={true} duration={500} spy={true} exact="true">
                            Spotlight
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="team" smooth={true} duration={500} spy={true} exact="true">
                            Team
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true">
                            Contact
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnItem>
                        <a href="https://twitter.com/ceoinc1"><FaTwitter/></a>
                    </NavBtnItem>
                    <NavBtnItem>
                        <a href="https://www.facebook.com/CEOINC1/"><FaFacebookF/></a>
                    </NavBtnItem>
                    <NavBtnItem>
                        <a href="https://www.linkedin.com/company/ceo-inc/"><FaLinkedin/></a>
                    </NavBtnItem>
                    <MobileIcon onClick={toggle}>
                        <FaBars size={24}/>
                    </MobileIcon>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
