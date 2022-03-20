import styled from 'styled-components'

export const Background = styled.img`
    height: 5300px;
    max-width: 1910px;
    margin-top: 1000px;
    justify-content: center;
    z-index:-99999;
    margin-top: -2000px;
    margin-left: -400px;
    opacity: 10%;
    position:absolute;

    @media screen and (max-width:950px) {
        height: 5300px;
    }
    @media screen and (max-width:480px) {
        height: 5600px;
    }
`
export const BackgroundContainer = styled.div`

`