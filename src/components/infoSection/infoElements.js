import styled from 'styled-components'
import {Link} from 'react-scroll'

export const InfoContainer = styled.div`
    padding-top: 125px;
    background: ${({lightBg}) => (lightBg ? '#fff' : 'rgba(62, 194, 243, 0);')};
    border-radius: 50px;
    display: flex;
    @media screen and (max-width:768px){
        padding: 100px 0;
    }
`
export const InfoWrapper = styled.div`
    display:grid;
    z-index: 1;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
`

export const InfoRow = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    justify-items: center;
    grid-auto-columns: ${({imgStart}) => (imgStart ? `auto 1fr` : `1fr auto`)};
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding-right: ${({imgStart}) => (imgStart ? `0` : `80px`)};
    padding-left: ${({imgStart}) => (imgStart ? `80px` : `0`)};
    grid-area: col1;

  @media screen and (max-width: 768px){
      padding-right: 0;
  }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    margin-top: 0;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 10px;
`

export const TopLine = styled.p`
    color: #3EC2F3;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const InfoImg = styled.img`
    height: ${({isthere}) => (isthere ? '100px' : '0px')};
    
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 85px;
    display: inline;
    
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#3EC2F3' : '#67686D')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const Heading1 = styled.h1`
    margin-bottom: 24px;
    font-size: 85px;
    display: inline;
    
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#3EC2F3' : '#67686D')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const Img1 = styled.img`
    max-width: 100%;
    max-height: 350px;
    padding-right: 20px;
`
export const ButtonEx = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ?  '#fff' : '#3EC2F3')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color : ${({dark}) => (dark ? '#3EC2F3' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    width: 200px;
    cursor: pointer;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#3EC2F3' : '#fff')};
        color : ${({dark}) => (dark ? '#fff' : '#3EC2F3')};
    }

`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 20px;
    letter-spacing: normal;
    padding: 0 0 0 0;
    font-weight: 400;
    font-family: ${({script})=> (script ? "'PT Serif', serif;" : "'Lato', sans-serif")};
    font-size: ${({big})=> (big ? '40px' : '25px')};
    line-height: ${({short})=> (short ? '29px' : '40px')};
    color: ${({darkText}) => (darkText ? '#67686D' : '#3EC2F3')};

    @media screen and (max-width: 480px){
      font-size: ${({big})=> (big ? '25px' : '20px')};
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    opacity: ${({slides1}) => (slides1 ? '100%' : '0%')};
    
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`