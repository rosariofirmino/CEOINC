import React from 'react'

import {ButtonFooter} from '../button'
import FL from '../../images/ceofooter.png'
import {FaTwitter, FaFacebookF, FaLinkedin} from 'react-icons/fa'
import {FooterBtn, FooterLogo, FooterBtnItem, FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLink, FooterLinkTitle, FooterBtnWrapper, FooterLinksWrapper } from './FooterElements'

const FooterSection = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLogo src={FL}/>
                    </FooterLinkItems>
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
                        <ButtonFooter>Find Jobs</ButtonFooter>
                    </FooterBtnWrapper>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default FooterSection