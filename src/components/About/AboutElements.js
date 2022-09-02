import styled from 'styled-components'

export const AboutContainer = styled.div`
    border-radius: 50px;
    padding-top: 125px;
    margin: 0 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
`

export const AboutWrapper = styled.div`
    max-width: 1600px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 1300px){
        padding: 0 20px;
    }
`

export const AboutCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    transition: all 0.2 ease-in-out;
    
    @media screen and (max-width:1300px) {
        flex-direction: column;
    }
`
export const AboutCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding-right: 135px;
    padding-left: 75px;
    @media screen and (max-width:1300px) {
        padding-right: 55px;
        padding-left: 55px; 
    }

`
export const AboutCardR = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    transition: all 0.2 ease-in-out;
    @media screen and (max-width:1300px) {
    }
    @media screen and (max-width:1300px) {
        flex-direction: column;
    }
`

export const TitleCont = styled.div`
    padding-bottom: 55px;
`

export const ImgStackContainer = styled.div`
    position: relative;
    margin-top: 40px;
`

export const AboutIcon = styled.img`
    position: absolute;
    height: 250px;
    &:hover{
        transform: scale(1.02);
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }
`

export const AboutIcon2f = styled.img`
  position: relative;
  transform: translate(35px, -5px);
  height: 240px;
  z-index: -1;
`

export const AboutIcon2 = styled.img`
  position: relative;
  transform: translate(15px, -15px);
  height: 240px;
  z-index: -1;
`

export const AboutIconL = styled.img`
    position: absolute;
    height: 420px;
    &:hover{
        transform: scale(1.02);
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }
`

export const AboutIcon2L = styled.img`
    position: relative;
    transform: translate(32px, -5px);
    height: 400px;
    z-index: -1;
`

export const AboutH1 = styled.h1`
    justify-content: left;
    font-size: 105px;
    color: #3EC2F3;
    margin-bottom: 64px;
    display: inline;
    @media screen and (max-width: 480px){
        font-size: 2.5rem;
    }
`
export const AboutH1b = styled.h1`
    justify-content: left;
    font-size: 85px;
    color: #3EC2F3;
    margin-bottom: 64px;
    display: inline;
    @media screen and (max-width: 480px){
        font-size: 2.5rem;
    }
`


export const AboutH2 = styled.h2`
    color: #3EC2F3;
    text-align: left;
    font-size: 2.5rem;
    margin-bottom: 10px;
`
export const AboutH2R = styled.h2`
    color: #3EC2F3;
    text-align: left;
    font-size: 2.5rem;
    margin-bottom: 10px;
`

export const AboutP = styled.p`
    color: #67686D;
    font-size: 1.5rem;
    width: 500px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    letter-spacing: normal;

    text-align: left;

  @media screen and (max-width: 650px){
    width: 80vw;
  }
`
export const AboutPR = styled.p`
    color: #67686D;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: normal;

    width: 500px;
    font-family: 'Lato', sans-serif;
    text-align: left;

  @media screen and (max-width: 650px){
    width: 80vw;
  }
`