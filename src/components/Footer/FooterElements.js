import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #3EC2F3;
    justify-content: space-between;

`

export const FooterLogo = styled.img`
    height: 50px;
`


export const FooterLinksWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 2rem;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
`
export const FooterText = styled.div `
`

export const FooterAd = styled.p`
    color: white;
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    font-weight: bold; 
    letter-spacing: normal;

    text-align: center;

`
export const FooterBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FooterBtnItem = styled.div`
    padding-left: 10px;
    font-size: 1.4rem;
    color: #fff;
    &:hover {
        font-size: 1.6rem;
        transition: all 0.2s ease-in-out;
    }
`

export const FooterBtn = styled.nav`
    display: flex;
    align-items: center;
    color: #fff;
    color: #fff;
  
    a {
      color: inherit;
    }
`