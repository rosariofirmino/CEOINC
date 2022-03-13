import React from 'react'
import {ButtonFooter} from '../button'
import { ContactCard, ContactNum, ContactH3, ContactH1, ContactContainer, ContactH2, ContactP, ContactWrapper} from './ContactElements'

const Contact = () => {
  return (
    <ContactContainer id="contact">
        <ContactH1>Contact Us</ContactH1>
        <ContactH3>"Centered on People"</ContactH3>
        <ContactNum>888-242-1755</ContactNum>
        <ContactWrapper>
            <ContactCard>
                <ContactH2>Looking for a new opportunity?</ContactH2>
                <ContactP>Complete this form to take the first step.</ContactP>
                <ButtonFooter style={{ margin: 50 }}>Find Yours</ButtonFooter>
            </ContactCard>
            <ContactCard>
                <ContactH2>Looking for talent?</ContactH2>
                <ContactP>Complete this form to connect with talent.</ContactP>
                <ButtonFooter style={{ margin: 50 }}>Start Now</ButtonFooter>
            </ContactCard>
        </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact