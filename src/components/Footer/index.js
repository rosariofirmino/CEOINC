import React from 'react'

import {ButtonFooter2} from '../button'
import FL from '../../images/ceofooter.png'
import {FaTwitter, FaFacebookF, FaLinkedin} from 'react-icons/fa'
import {FooterText, FooterAd, FooterBtn, FooterLogo, FooterBtnItem, FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLink, FooterLinkTitle, FooterBtnWrapper, FooterLinksWrapper } from './FooterElements'

const FooterSection = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
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
                                <FaTwitter/>
                            </FooterBtnItem>
                            <FooterBtnItem>
                                <FaFacebookF/>
                            </FooterBtnItem>
                            <FooterBtnItem>
                                <FaLinkedin/>
                            </FooterBtnItem>
                        </FooterBtn>
                        <ButtonFooter2>Find Jobs</ButtonFooter2>
                    </FooterBtnWrapper>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default FooterSection