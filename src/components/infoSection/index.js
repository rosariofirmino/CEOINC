import imag from '../../images/teamImages/1x/Asset 1.png'
import img1 from '../../images/spotlight1.png'
import {Button} from '../button'


import React, { useState } from 'react';
import { SliderData, SecondSliderData } from './SliderData';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Img1, ButtonEx, InfoImg, Heading1, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap} from './infoElements'

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
                <Column1>
                <TextWrapper>
                  <div >
                    <Heading lightText={lightText} >
                        {headLine}
                    </Heading>
                    <Heading1 lightText={lightText} >
                        {headLine2}
                    </Heading1>
                  </div>
                    <Subtitle darkText={darkText} script={script} big={big} short={short}>
                        {description}
                    </Subtitle>
                    <ButtonEx>See our positions</ButtonEx>
                </TextWrapper>
                </Column1>
                <Column2>
                <Img1 isimg = {isimg} src={img1}/>
                <ImgWrap slides1={slides1}>
                <section className='slider'>
                <BsChevronLeft className='left-arrow' onClick={prevSlide} color='#3EC2F3' />
                <BsChevronRight className='right-arrow' onClick={nextSlide} color='#3EC2F3' />
                {slides.map((slide, index) => {
                    return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                        <img src={slide.image} alt='travel image' className='image' />
                        )}
                    </div>
                    );
                })}
                </section>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection