import styled from 'styled-components'

export const TeamContainer = styled.div`
    height: 600px;
    border-radius: 50px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TeamWrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 50px;

`

export const TeamCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    width: 300px;
    padding: 30px;
    transition: all 0.2 ease-in-out;


    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`

export const TeamIcon = styled.img`
    height: 160px;
    margin-bottom: 10px;
`

export const TeamH1 = styled.h1`
    font-size: 3rem;
    color: #3EC2F3;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2.5rem;
    }
`

export const TeamH2 = styled.h2`
    color: #3EC2F3;
    font-size: 1.7rem;
    margin-bottom: 10px;
`

export const TeamP = styled.p`
    color: #67686D;
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    text-align: center;
`