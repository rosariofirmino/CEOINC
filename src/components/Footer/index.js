import React from 'react'
import {Button} from '../button'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinkesContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>CEO INC</FooterLinkTitle>
                        <FooterLink to="/jobs"> Find Jobs </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkBtnWrap>
                        <Button>Find Jobs</Button>
                    </FooterLinkBtnWrap>
                </FooterLinksWrapper>
            </FooterLinkesContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer