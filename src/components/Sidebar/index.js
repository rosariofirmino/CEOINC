import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarLink, SideBarRoute
, SideBarWrapper, SideBtnWrap, SideBarMenu } from './SidebarElements'

const Sidebar = () => {
  return (
    <SideBarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="expertise">
                    Our Expertise
                </SideBarLink>
                <SideBarLink to="about">
                    About
                </SideBarLink>
                <SideBarLink to="recognitions">
                    Recognitions
                </SideBarLink>
                <SideBarLink to="spotlight">
                    Spotlight
                </SideBarLink>
                <SideBarLink to="contact">
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