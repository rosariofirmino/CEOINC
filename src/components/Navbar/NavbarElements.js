import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
    background: rgba(62, 194, 243, 0);
    margin-top: -80px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
    &.active{
        background: rgba(142, 142, 150, 1);
        transition: all 0.2s ease-in-out;

    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width: 100%;
    padding: 12px 24px;
    max-width: 1100px;
  
    @media screen and (max-width: 388px) {
      flex-direction: column;
    }
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #fff;
        margin-left: 1rem;

    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.12rem;

    &.active {
        border-bottom: 3px solid #3EC2F3;
    }
    &:hover {
        border-bottom: 3px solid #3EC2F3;
    }


`
export const NavBgS = styled(LinkS)`
    background: rgba(62, 194, 243, 0);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 9;
    &.active {
        background: rgba(62, 194, 243, 1);
        
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    color: #fff;
  
    a {
      color: inherit;
      display: flex;
      align-items: center;
    }
`

export const NavBtnItem = styled.div`
    padding-left: 10px;
    font-size: 1.4rem;
    &:hover {
        font-size: 1.6rem;
        transition: all 0.2s ease-in-out;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #3EC2F3;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #3EC2F3;
    }
`

export const NavLogoImg = styled.img`
    height: 45px;
`