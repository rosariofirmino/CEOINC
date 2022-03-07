import React from 'react'
import Icon1 from '../../images/ceoinclogo.png'
import {FaBars, FaTwitter, FaFacebookF, FaLinkedin} from 'react-icons/fa'
import{NavLogoImg, Nav,NavbarContainer,NavLogo,MobileIcon,NavItem,NavLinks,NavMenu,NavBtn,NavBtnLink, NavBtnItem} from './NavbarElements'


const Navbar = ({toggle}) => {
  return (
    <>
        <Nav classname='navbar'>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavLogoImg src={Icon1}/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
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
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar