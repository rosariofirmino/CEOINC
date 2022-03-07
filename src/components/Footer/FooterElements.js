import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #3EC2F3;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display:flex;
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    background-color: #fff;
    border-radius: 50px;
    text-align: left;
    width: 200px;
    box-sizing: border-box;
    color: #fff;
    
    @media screen and (max-width: 420px){
        margin: 0;
        padding 10px;
        width: 100%;
        
    }
    
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        font-size: 15px;
        transition: 0.3s ease-in-out;
    }
`
export const FooterBtnWrapper = styled.div`
    margin-top: 32px;
    padding-left: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        padding-left: 0px;

    }

`

export const FooterBtnItem = styled.div`
    padding-left: 10px;
    font-size: 1.4rem;
    &:hover {
        font-size: 1.6rem;
        transition: all 0.2s ease-in-out;
    }
`

export const FooterBtn = styled.nav`
    display: flex;
    align-items: center;
    color: #fff;

    @media screen and (max-width: 768px){
        padding-right: 40px;
    }
`