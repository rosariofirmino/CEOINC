import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarLink, SideBarWrapper, SideBtnWrap, SideBarMenu } from './SidebarElements'
import {Button2} from '../button'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="expertise" onClick={toggle}>
                    Expertise
                </SideBarLink>
                <SideBarLink to="about" onClick={toggle}>
                    About
                </SideBarLink>
                <SideBarLink to="spotlight" onClick={toggle}>
                    Spotlight
                </SideBarLink>
                <SideBarLink to="team" onClick={toggle}>
                    Team
                </SideBarLink>
                <SideBarLink to="contact" onClick={toggle}>
                    Contact
                </SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <Button2 href='https://ceoinc.com/career-portal/#/jobs'>
                    Find Jobs
                </Button2>
            </SideBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default Sidebar
