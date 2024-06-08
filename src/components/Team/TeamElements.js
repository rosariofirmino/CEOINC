import styled from 'styled-components'



export const TeamContainer = styled.div`
    border-radius: 50px;
    margin: 0 50px;
    padding-top: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Center the content vertically */
`;

export const TeamWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; /* Center the content horizontally */
`;

export const TeamScroll = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    max-width: 1600px;
    width: 100%;
    padding-bottom: 20px;
    justify-content: center; /* Center the grid horizontally */
`;

export const TeamCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    width: 350px;
    padding: 30px;
    margin: 10px;
    transition: transform 0.4s ease-in-out;

    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        max-width: 300px; /* Adjust as needed */
    }
`;




export const TeamIcon = styled.img`
    height: 160px;
    margin-bottom: 10px;
`
export const TitleCont = styled.div`
    float: left;
`
export const TeamH1 = styled.h1`
    font-size: 105px;
    color: #3EC2F3;
    margin-bottom: 0px;
    display: inline;
    @media screen and (max-width: 480px){
        font-size: 2.5rem;
    }
`
export const TeamH1b = styled.h1`
    font-size: 85px;
    color: #3EC2F3;
    margin-bottom: 0px;
    display: inline;

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
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    text-align: center;
`
