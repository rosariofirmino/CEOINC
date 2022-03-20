import imag from '../../images/teamImages/1x/Asset 1.png'

import {Button} from '../button'
import React, { useState } from 'react';
import { SliderData, SecondSliderData } from './SliderData';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { InfoImg, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap} from './infoElements'

const InfoSection = ({short, slides,lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img, alt,big, script, isthere}) => {
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
                    <Heading lightText={lightText} >
                        {headLine}
                    </Heading>
                    <InfoImg src={imag} isthere={isthere}/>
                    <Subtitle darkText={darkText} script={script} big={big} short={short}>
                        {description}
                    </Subtitle>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
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