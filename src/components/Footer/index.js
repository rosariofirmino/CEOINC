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
                        <FooterAd>3300 Cambria Road, Charlotte NC 28210</FooterAd>
                        <FooterAd>Toll Free: 888-242-1755</FooterAd>
                        <FooterAd>Tel: 704-372-4701</FooterAd>
                        <FooterAd>Fax: 704-372-4707</FooterAd>
                    </FooterText>

                    <FooterBtnWrapper>
                        <FooterBtn>
                            <FooterBtnItem>
                                <a href="https://twitter.com/ceoinc1" style={{ textDecoration: 'none' }}><FaTwitter/></a>
                            </FooterBtnItem>
                            <FooterBtnItem>
                                <a href="https://www.facebook.com/CEOINC1/" style={{ textDecoration: 'none' }}><FaFacebookF/></a>
                            </FooterBtnItem>
                            <FooterBtnItem>
                                <a href="https://www.linkedin.com/company/ceo-inc/" style={{ textDecoration: 'none' }}><FaLinkedin/></a>
                            </FooterBtnItem>
                        </FooterBtn>
                        <ButtonFooter2 href='https://career.ceoinc.com/#/jobs'>Find Jobs</ButtonFooter2>
                    </FooterBtnWrapper>
                </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default FooterSection