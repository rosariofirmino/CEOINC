import React from 'react'
import pic from '../../images/back.png'
import { HeroContainer, HeroBg, PicBg, HeroBtnWrapper, HeroContent, HeroH1 } from './heroelements'
import {Button} from '../button'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <PicBg src={pic} type='image/png'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                DELIVERING TOP TALENT
            </HeroH1>
            <HeroBtnWrapper>
                <Button to="jobs">
                Find Jobs 
                </Button>
            </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection