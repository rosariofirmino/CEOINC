import React from 'react'
import imag from '../../images/recruit.svg'
import {Button} from '../button'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap} from './infoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img, alt}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <Heading lightText={lightText}>
                        {headLine}
                    </Heading>
                    <Subtitle darkText={darkText}>
                        {description}
                    </Subtitle>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                    <Img src={img} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection