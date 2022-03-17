import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 1600px;
    border-radius: 50px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #67686D;

    @media screen and (max-width:1600px) {
        height: 1500px;
    }
    @media screen and (max-width:950px) {
        height: 1700px;
    }
`

export const AboutWrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 950px){
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
    @media screen and (max-width:1600px) {
    }
    @media screen and (max-width:950px) {
        flex-direction: column;
    }
`
export const AboutCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;

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

`

export const AboutIcon = styled.img`
    height: 250px;
    margin-bottom: 10px;
    zIndex: 1;
    &:hover{
        transform: scale(1.02);
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }
`

export const AboutH1 = styled.h1`
    justify-content: left;
    font-size: 3rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2.5rem;
    }
`

export const AboutH2 = styled.h2`
    color: #fff;
    text-align: left;
    font-size: 1.7rem;
    margin-bottom: 10px;
`
export const AboutH2R = styled.h2`
    color: #fff;
    text-align: right;
    font-size: 1.7rem;
    margin-bottom: 10px;
`

export const AboutP = styled.p`
    color: #fff;
    font-size: 1rem;
    width: 640px;
    font-family: 'Nunito', sans-serif;
    text-align: left;
`
export const AboutPR = styled.p`
    color: #fff;
    font-size: 1rem;
    width: 640px;
    font-family: 'Nunito', sans-serif;
    text-align: right;
`