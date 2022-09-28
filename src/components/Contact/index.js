import React, { useRef, useState } from 'react'
import {ButtonFooter} from '../button'
import {
  ContactNum,
  ContactH3,
  ContactH1,
  ContactContainer,
  ContactH2,
  ContactP,
  ContactWrapper, ContactHeader, ContactBody, OpportunityForm, TalentForm
} from './ContactElements'
import OverlayModal from '../common/overlayModal';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ isOpportunityModalOpen, setIsOpportunityModalOpen ] = useState(false);
  const [ isTalentModalOpen, setIsTalentModalOpen ] = useState(false);
  const [ isOpportunityOtherChosen, setIsOpportunityOtherChosen ] = useState(false);
  const [ isTalentOtherChosen, setIsTalentOtherChosen ] = useState(false);

  const opportunityForm = useRef();
  const talentForm = useRef();

  const sendOpportunityEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_gd09shg', 'opportunity-form', opportunityForm.current, 'Ndzd9tFu3fRhPXLSM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const sendTalentEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_gd09shg', 'talent-form', talentForm.current, 'Ndzd9tFu3fRhPXLSM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const handleOpportunityOther = (e) => {
    setIsOpportunityOtherChosen(e.target.value === 'other')
  }

  const handleTalentOther = (e) => {
    setIsTalentOtherChosen(e.target.value === 'other')
  }

  return (
    <>
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
              <ButtonFooter style={{margin: 50}} onClick={() => setIsOpportunityModalOpen(true)}>Find Yours</ButtonFooter>
            </div>
            <div>
              <ContactH2>Looking for talent?</ContactH2>
              <ContactP>Complete this form to connect with talent.</ContactP>
              <ButtonFooter style={{margin: 50}} onClick={() => setIsTalentModalOpen(true)}>Start Now</ButtonFooter>
            </div>
          </ContactBody>
        </ContactContainer>
      </ContactWrapper>

      <OverlayModal isOpen={isOpportunityModalOpen} setIsOpen={setIsOpportunityModalOpen} onClose={() => setIsOpportunityOtherChosen(false)} title="Looking for new opportunity?" description="Complete this form to take the first step." >
        <OpportunityForm ref={opportunityForm} onSubmit={sendOpportunityEmail}>
          <label id="opportunity-name">
            <p>Name <span className="red">*</span></p>
            <div>
              <input type="text" name="first_name" placeholder="First" required />
              <input type="text" name="last_name" placeholder="Last" required />
            </div>
          </label>

          <label id="opportunity-email">
            <p>Email <span className="red">*</span></p>
            <input type="email" name="email" required />
          </label>

          <label id="opportunity-phone">
            <p>Phone <span className="red">*</span></p>
            <input type="tel" name="phone" required />
          </label>

          <label id="opportunity-industry">
            <p>Your Industry</p>
            <select name="industry">
              <option value="packaging">Packaging</option>
              <option value="composites">Composites</option>
              <option value="aerospace">Aerospace</option>
              <option value="electronics">Electronics</option>
              <option value="medical-supply">Medical Supply</option>
              <option value="metallurgy">Metallurgy</option>
            </select>
          </label>

          <label id="opportunity-position">
            <p>Position you're looking for</p>
            <select name="position" onChange={handleOpportunityOther}>
              <option value="engineering">Engineer</option>
              <option value="production/operations-management">Production/Operations Management</option>
              <option value="technical-sales">Technical Sales</option>
              <option value="technician">Technician-Level Roles</option>
              <option value="maintenance-mechanical-roles">Maintenance Mechanical Roles</option>
              <option value="other">Other</option>
            </select>
          </label>

          {isOpportunityOtherChosen &&
            <label id="opportunity-position-other">
              <p>Other position</p>
              <input type={"text"} name="position-other" />
            </label>
          }

          {/*<label id="opportunity-resume">*/}
          {/*  <p>Attach Resume</p>*/}
          {/*  <input type="file" />*/}
          {/*</label>*/}

          <input type="submit" value="Send" id="opportunity-submit" />
        </OpportunityForm>
      </OverlayModal>

      <OverlayModal isOpen={isTalentModalOpen} setIsOpen={setIsTalentModalOpen} onClose={() => setIsTalentOtherChosen(false)} title="Looking for talent?" description="Complete this form to get connected." >
        <TalentForm ref={talentForm} onSubmit={sendTalentEmail}>
          <label id="talent-name">
            <p>Name <span className="red">*</span></p>
            <div>
              <input type="text" name="first_name" placeholder="First" required />
              <input type="text" name="last_name" placeholder="Last" required />
            </div>
          </label>

          <label id="talent-email">
            <p>Email <span className="red">*</span></p>
            <input type="email" name="email" required />
          </label>

          <label id="talent-phone">
            <p>Phone <span className="red">*</span></p>
            <input type="tel" name="phone" required />
          </label>

          <label id="talent-company">
            <p>Company <span className="red">*</span></p>
            <input type="text" name="company-name" required />
          </label>

          <label id="talent-industry">
            <p>Your Industry</p>
            <select name="industry" onChange={handleTalentOther}>
              <option value="engineering">Engineer</option>
              <option value="production/operations-management">Production/Operations Management</option>
              <option value="technical-sales">Technical Sales</option>
              <option value="technician">Technician-Level Roles</option>
              <option value="maintenance-mechanical-roles">Maintenance Mechanical Roles</option>
              <option value="other">Other</option>
            </select>
          </label>

          {isTalentOtherChosen &&
            <label id="talent-industry-other">
              <p>Other industry</p>
              <input type={"text"} name="industry-other" />
            </label>
          }

          <input type="submit" value="Send" id="talent-submit" />
        </TalentForm>
      </OverlayModal>
    </>
  )
}

export default Contact
