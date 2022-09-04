import React from 'react'
import {ButtonFooter} from '../button'
import {
  ContactCard,
  ContactHr,
  ContactNum,
  ContactH3,
  ContactH1,
  ContactContainer,
  ContactH2,
  ContactP,
  ContactWrapper, ContactHeader, ContactBody
} from './ContactElements'

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactContainer>
        <ContactHeader>
          <ContactH1>Contact Us</ContactH1>
          <ContactH3>"Centered on People"</ContactH3>
          <ContactNum>888-242-1755</ContactNum>
        </ContactHeader>

        <ContactBody>
          <div>
            <ContactH2>Looking for a new opportunity?</ContactH2>
            <ContactP>Complete this form to take the first step.</ContactP>
            <ButtonFooter style={{margin: 50}}>Find Yours</ButtonFooter>
          </div>
          <div>
            <ContactH2>Looking for talent?</ContactH2>
            <ContactP>Complete this form to connect with talent.</ContactP>
            <ButtonFooter style={{margin: 50}}>Start Now</ButtonFooter>
          </div>
        </ContactBody>
      </ContactContainer>
    </ContactWrapper>
  )
}

export default Contact