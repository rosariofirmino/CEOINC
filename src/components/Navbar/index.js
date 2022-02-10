import React from 'react'
import {FaBars} from 'react-icons/fa'
import{Nav,NavbarContainer,NavLogo,MobileIcon,NavItem,NavLinks,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'



const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    logo
                </NavLogo>
                <MobileIcon>
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
                    <NavBtnLink to='/jobboard'>Find Jobs</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar