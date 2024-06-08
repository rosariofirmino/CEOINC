import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import isArray from 'lodash/isArray'

const ImgSlider = (props) => {
  const {
    imgArr
  } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex === imgArr.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imgArr.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  if (!isArray(imgArr) || imgArr.length === 0) {
    return null
  }

  return (
    <>
      <div className="img-slider">
        <BsChevronLeft onClick={handleNext} color='#3EC2F3' className="img-slider--icon" size={40} />
        <img loading="lazy" src={imgArr[currentIndex]} key={currentIndex} alt="" className="img-slider--image fade" />
        <BsChevronRight onClick={handlePrev} color='#3EC2F3' className="img-slider--icon" size={40} />
      </div>
    </>
  )
}

export default ImgSlider