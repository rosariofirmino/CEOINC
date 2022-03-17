import styled from 'styled-components'

export const InfoContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? '#fff' : 'rgba(62, 194, 243, 0);')};
    border-radius: 50px;
    margin: 50px;
    display: flex;
    @media screen and (max-width:768px){
        padding: 100px 0;
    }
`
export const InfoWrapper = styled.div`
    display:grid;
    z-index: 1;
    height: 500px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: right;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    justify-content: right;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    margin-top: -150px;
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

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#3EC2F3' : '#67686D')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 20px;
    font-family: ${({script})=> (script ? "'Vollkorn', serif;" : "'Nunito', sans-serif")};
    font-size: ${({big})=> (big ? '35px' : '18px')};
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#67686D' : '#3EC2F3')};
    
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`