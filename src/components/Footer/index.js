import React from 'react'
import {ButtonFooter} from '../button'
import {FaTwitter, FaFacebookF, FaLinkedin} from 'react-icons/fa'
import {FooterBtn, FooterBtnItem, FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLink, FooterLinkTitle, FooterBtnWrapper, FooterLinksWrapper } from './FooterElements'

const FooterSection = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>CEO INC</FooterLinkTitle>
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