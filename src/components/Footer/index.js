import React from 'react'

import {ButtonFooter2} from '../button'
import FL from '../../images/ceofooter.png'
import {FaTwitter, FaFacebookF, FaLinkedin} from 'react-icons/fa'
import {FooterText, FooterAd, FooterBtn, FooterLogo, FooterBtnItem, FooterContainer, FooterLinkItems, FooterBtnWrapper, FooterLinksWrapper } from './FooterElements'

const FooterSection = () => {
  return (
    <FooterContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLogo src={FL}/>
                    </FooterLinkItems>
                    <FooterText>
                        <FooterAd>412 Louise Avenue, Charlotte, NC 28204</FooterAd>
                        <FooterAd>Toll Free: 888-242-1755</FooterAd>
                        <FooterAd>Tel: 704-372-4701</FooterAd>
                        <FooterAd>Fax: 704-372-4707</FooterAd>
                    </FooterText>

                    <FooterBtnWrapper>
                        <FooterBtn>
                            <FooterBtnItem>
                                <a href="https://twitter.com/ceoinc1"><FaTwitter/></a>
                            </FooterBtnItem>
                            <FooterBtnItem>
                                <a href="https://www.facebook.com/CEOINC1/"><FaFacebookF/></a>
                            </FooterBtnItem>
                            <FooterBtnItem>
                                <a href="https://www.linkedin.com/company/ceo-inc/"><FaLinkedin/></a>
                            </FooterBtnItem>
                        </FooterBtn>
                        <ButtonFooter2 href='https://ceoinc.com/career-portal/#/jobs'>Find Jobs</ButtonFooter2>
                    </FooterBtnWrapper>
                </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default FooterSection