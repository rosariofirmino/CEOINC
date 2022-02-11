import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarLink, SideBarRoute
, SideBarWrapper, SideBtnWrap, SideBarMenu } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="expertise" onClick={toggle}>
                    Our Expertise
                </SideBarLink>
                <SideBarLink to="about" onClick={toggle}>
                    About
                </SideBarLink>
                <SideBarLink to="recognitions" onClick={toggle}>
                    Recognitions
                </SideBarLink>
                <SideBarLink to="spotlight" onClick={toggle}>
                    Spotlight
                </SideBarLink>
                <SideBarLink to="contact" onClick={toggle}>
                    Contact
                </SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/jobs">
                    Find Jobs
                </SideBarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default Sidebar