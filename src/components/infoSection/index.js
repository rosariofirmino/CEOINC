import imag from '../../images/teamImages/1x/Asset 1.png'
import img1 from '../../images/Group 7.png'
import {Button} from '../button'


import React, { useState } from 'react';
import { SliderData, SecondSliderData } from './SliderData';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Img1, ButtonEx, InfoImg, Heading1, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap} from './infoElements'
import ImgSlider from "../common/imgSlider";

const InfoSection = ({isimg, short,slides1, slides,lightBg, id, imgStart, topLine, lightText, headLine, headLine2, darkText, description, img, alt,big, script, isthere}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1 imgStart={imgStart}>
              <TextWrapper>
                <div>
                  <Heading lightText={lightText}>
                    {headLine}
                  </Heading>
                  <Heading1 lightText={lightText}>
                    {headLine2}
                  </Heading1>
                </div>
                <Subtitle darkText={darkText} script={script} big={big} short={short}>
                  {description}
                </Subtitle>
                <ButtonEx href='https://career.ceoinc.com/#/jobs'>See our positions</ButtonEx>
              </TextWrapper>
            </Column1>
            <Column2>
              {isimg && <Img1 loading="lazy" src={img1} alt=''/>}
              {!isimg && <ImgSlider imgArr={slides.map(slide => slide.image)} />}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection