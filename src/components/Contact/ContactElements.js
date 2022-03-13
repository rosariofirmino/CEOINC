import styled from 'styled-components'

export const ContactContainer = styled.div`
    height: 300px;
    border-radius: 50px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #3EC2F3;

    @media screen and (max-width:1600px) {
        height: 700px;
    }
    @media screen and (max-width:950px) {
        height: 1200px;
    }
`

export const ContactWrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 950px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ContactCard = styled.div`
    background: #3EC2F3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 300px;
    padding: 30px;
    padding-top: 130px;
    transition: all 0.2 ease-in-out;

`

export const ContactIcon = styled.img`
    height: 160px;
    margin-bottom: 10px;
`

export const ContactH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    margin-bottom: 4px;

    @media screen and (max-width: 480px){
        font-size: 2.5rem;
    }
`

export const ContactH2 = styled.h2`
    color: #fff;
    font-size: 1.7rem;
    margin-bottom: 10px;
`
export const ContactH3 = styled.h3`
    color: #fff;
    font-size: 1.7rem;
    margin-bottom: 10px;
`
export const ContactNum = styled.h3`
    color: #fff;
    font-size: 1.7rem;
    font-family: 'Nunito', sans-serif;
    text-align: center;
`

export const ContactP = styled.p`
    color: #fff;
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    text-align: center;
`
export const ContactHr = styled.hr`
    height: 5px;
    color: #fff;
    background-color: #fff;
`