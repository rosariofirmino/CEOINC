import React from 'react'
import vid from '../../videos/ceovid.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, HeroContent, HeroH1 } from './heroelements'
import {Button2} from '../button'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={vid} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                DELIVERING TOP TALENT
            </HeroH1>
            <HeroBtnWrapper>
                <Button2 href='https://ceoinc.com/career-portal/#/jobs'>
                Find Jobs 
                </Button2>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
