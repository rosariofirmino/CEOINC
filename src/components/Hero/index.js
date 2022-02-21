import React from 'react'
import vid from '../../videos/ceovid.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, HeroContent, HeroH1 } from './heroelements'
import {Button} from '../button'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loopo muted src={vid} type='video/mp4'/>
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