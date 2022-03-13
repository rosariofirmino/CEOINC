import React from 'react'
import Icon1 from '../../images/1.svg'
import Icon2 from '../../images/2.png'
import Icon3 from '../../images/3.png'

import { AboutCard, AboutH1, AboutContainer, AboutWrapper, AboutIcon, AboutH2, AboutP } from './AboutElements'

const About = () => {
  return (
    <AboutContainer id="about">
        <AboutH1>About Us</AboutH1>
        <AboutWrapper>
            <AboutCard>
                <AboutH2>Who We Are</AboutH2>
                <AboutIcon src={Icon1}/>
                <AboutP>Founded in 1994, CEO Inc  is a team of more than 20 experienced recruitment and staffing professionals specializing in direct hire placements nationwide in the manufacturing industry.</AboutP>
            </AboutCard>
            <AboutCard>
                <AboutH2>What We Do</AboutH2>
                <AboutIcon src={Icon2}/>
                <AboutP>With industry knowledge and manufacturing expertise in plastics, composites, chemicals, and textiles, our staff finds the right talent for companies seeking to hire engineers, executive-level sales, and operational management talent within each industry.</AboutP>
            </AboutCard>
            <AboutCard>
                <AboutH2>Our Approach</AboutH2>
                <AboutIcon src={Icon3}/>
                <AboutP>Actual Industry Experience is What Sets Us Apart.

Drawing on over twenty-seven years of experience in direct hire placements in the manufacturing industry, our time-tested approach of ensuring we listen so that we can fully understand each client’s goal in finding the right talent. The end results are realistic timelines, quality candidates and game-changing talent staff additions.</AboutP>
            </AboutCard>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About