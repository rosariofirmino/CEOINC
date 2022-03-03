import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 800px;
    border-radius: 50px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #67686D;

    @media screen and (max-width:1600px) {
        height: 1200px;
    }
    @media screen and (max-width:950px) {
        height: 1700px;
    }
`

export const AboutWrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1600px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 950px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const AboutCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 450px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2 ease-in-out;


    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`

export const AboutIcon = styled.img`
    height: 160px;
    margin-bottom: 10px;
`

export const AboutH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2.5rem;
    }
`

export const AboutH2 = styled.h2`
    color: #3EC2F3;
    font-size: 1.7rem;
    margin-bottom: 10px;
`

export const AboutP = styled.p`
    color: #67686D;
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    text-align: center;
`