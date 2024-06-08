import React from 'react'
import Icon1 from '../../images/Who We Are.png'
import Icon2 from '../../images/What We Do.png'
import Icon3 from '../../images/Our Approach.png'
import blue1 from '../../images/WWA.png'
import blue2 from '../../images/WWD.png'
import blue3 from '../../images/OA.png'

import {
  AboutIconL,
  AboutIcon2f,
  AboutH1b,
  AboutIcon2,
  AboutIcon2L,
  AboutCard,
  AboutH2R,
  AboutCardR,
  AboutPR,
  AboutCardInfo,
  AboutH1,
  AboutContainer,
  AboutWrapper,
  AboutIcon,
  AboutH2,
  AboutP,
  TitleCont,
  ImgStackContainer
} from './AboutElements'

const About = () => {
  return (
    <AboutContainer id="about">
        <TitleCont>
        <AboutH1>About Us</AboutH1>
        <AboutH1b></AboutH1b>
        </TitleCont>
        <AboutWrapper>
            <AboutCard>
                <AboutCardInfo>
                    <AboutH2>Who We Are</AboutH2>
                    <AboutP>Founded in 1994, CEO Inc. is a team of more than 20 experienced recruitment and staffing professionals with a proven track record of success. Our team specializes in nationwide direct- hire placement across several vertical industries, including manufacturing.</AboutP>
                </AboutCardInfo>
              <ImgStackContainer>
                <AboutIcon loading="lazy" src={Icon3}/>
                <AboutIcon2f src={blue1}/>
              </ImgStackContainer>

            </AboutCard>
            <AboutCardR>
                <AboutCardInfo>
                    <AboutH2R>What We Do</AboutH2R>
                    <AboutPR>With industry knowledge and manufacturing expertise in plastics, composites, chemicals, and textiles, our team finds the right talent for companies seeking to hire engineers, executive-level sales, and operational management.</AboutPR>
                </AboutCardInfo>
              <ImgStackContainer>
                <AboutIconL loading="lazy" src={Icon2}/> 
                <AboutIcon2L src={blue2}/>
              </ImgStackContainer>

            </AboutCardR>
            <AboutCard>
                <AboutCardInfo>
                    <AboutH2>Our Approach</AboutH2>
                    <AboutP>Real life, real results staffing industry experience is what sets us apart from other providers. Drawing on nearly three decades of sourcing and placing professionals on a direct-hire basis, our time-tested approach ensures we listen to and fully understand your goals. We consistently deliver realistic timelines, quality candidates and game-changing talent.</AboutP>
                </AboutCardInfo>
              <ImgStackContainer>
                <AboutIcon loading="lazy" src={Icon1}/>
                <AboutIcon2 src={blue1}/>
              </ImgStackContainer>

            </AboutCard>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About