import React from 'react'
import Icon1 from '../../images/Who We Are.png'
import Icon2 from '../../images/What We Do.png'
import Icon3 from '../../images/Our Approach.png'
import blue1 from '../../images/WWA.png'
import blue2 from '../../images/WWD.png'
import blue3 from '../../images/OA.png'

import { AboutIconL, AboutIcon2, AboutIcon2L, AboutCard, AboutH2R, AboutCardR, AboutPR, AboutCardInfo, AboutH1, AboutContainer, AboutWrapper, AboutIcon, AboutH2, AboutP } from './AboutElements'

const About = () => {
  return (
    <AboutContainer id="about">
        <AboutH1>About Us</AboutH1>
        <AboutWrapper>
            <AboutCard>
                <AboutCardInfo>
                    <AboutH2>Who We Are</AboutH2>
                    <AboutP>Founded in 1994, CEO Inc  is a team of more than 20 experienced recruitment and staffing professionals specializing in direct hire placements nationwide in the manufacturing industry.</AboutP>
                </AboutCardInfo>
                <AboutIcon src={Icon1}/>
                <AboutIcon2 src={blue1}/>

            </AboutCard>
            <AboutCardR>
                <AboutCardInfo>
                    <AboutH2R>What We Do</AboutH2R>
                    <AboutPR>With industry knowledge and manufacturing expertise in plastics, composites, chemicals, and textiles, our staff finds the right talent for companies seeking to hire engineers, executive-level sales, and operational management talent within each industry.</AboutPR>
                </AboutCardInfo>
                <AboutIconL src={Icon2}/> 
                <AboutIcon2L src={blue2}/>

            </AboutCardR>
            <AboutCard>
                <AboutCardInfo>
                    <AboutH2>Our Approach</AboutH2>
                    <AboutP>Actual Industry Experience is What Sets Us Apart.

Drawing on over twenty-seven years of experience in direct hire placements in the manufacturing industry, our time-tested approach of ensuring we listen so that we can fully understand each client’s goal in finding the right talent. The end results are realistic timelines, quality candidates and game-changing talent staff additions.</AboutP>
                </AboutCardInfo>
                <AboutIcon src={Icon3}/>
                <AboutIcon2 src={blue1}/>

            </AboutCard>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About