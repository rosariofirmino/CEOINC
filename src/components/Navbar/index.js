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
                        <NavLinks to="expertise">
                            Our Expertise
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="recognitions">
                            Recognitions
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="spotlight">
                            Spotlight
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">
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