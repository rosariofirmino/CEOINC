import imag from '../../images/recruit.svg'
import {Button} from '../button'
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap} from './infoElements'

const InfoSection = ({slides,lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img, alt}) => {
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
                <section className='slider'>
                <BsChevronLeft className='left-arrow' onClick={prevSlide} />
                <BsChevronRight className='right-arrow' onClick={nextSlide} />
                {SliderData.map((slide, index) => {
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