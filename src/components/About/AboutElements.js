import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 1600px;
    border-radius: 50px;
    margin: 85px;
    padding-top: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;

    @media screen and (max-width:1600px) {
        height: 1500px;
    }
    @media screen and (max-width:1300px) {
        height: 1900px;
    }
`

export const AboutWrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding:;

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
    height: 450px;
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

export const AboutIcon = styled.img`
    height: 250px;
    margin-bottom: 10px;
    z-index: 2;
    padding-right: 80px;
    &:hover{
        transform: scale(1.02);
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }
`
export const AboutIconL = styled.img`
    height: 420px;
    margin-bottom: 10px;
    z-index: 2;
    padding-right: 80px;
    &:hover{
        transform: scale(1.02);
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }
`
export const AboutIcon2 = styled.img`
    height: 240px;
    margin-bottom: 10px;
    margin-top: 30px;
    margin-left: -405px;
    z-index: 1;
    padding-right: 80px;


    @media screen and (max-width: 1300px){
        margin-top: -240px;
        margin-left: -50px;
    }
`
export const AboutIcon2f = styled.img`
    height: 240px;
    margin-bottom: 10px;
    margin-top: -25px;
    margin-left: -405px;
    z-index: 1;
    padding-right: 80px;


    @media screen and (max-width: 1300px){
        margin-top: -240px;
        margin-left: -50px;
    }
`
export const AboutIcon2L = styled.img`
    height: 400px;
    margin-bottom: 10px;
    margin-top: -30px;
    margin-right: -250px;
    z-index: 1;

    @media screen and (max-width: 1300px){
        margin-top: -240px;
        margin-left: -200px;
    }
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
`
export const AboutPR = styled.p`
    color: #67686D;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: normal;

    width: 500px;
    font-family: 'Lato', sans-serif;
    text-align: left;
`