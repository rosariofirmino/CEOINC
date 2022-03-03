import React from 'react'
import {FaBars, FaTwitter, FaFacebookF, FaLinkedin} from 'react-icons/fa'
import{Nav,NavbarContainer,NavLogo,MobileIcon,NavItem,NavLinks,NavMenu,NavBtn,NavBtnLink, NavBtnItem} from './NavbarElements'



const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    logo
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
                        <FaTwitter/>
                    </NavBtnItem>
                    <NavBtnItem>
                        <FaFacebookF/>
                    </NavBtnItem>
                    <NavBtnItem>
                        <FaLinkedin/>
                    </NavBtnItem>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar