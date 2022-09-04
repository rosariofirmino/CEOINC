import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3EC2F3;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 60px;
  padding: 1rem;
  margin-bottom: 1rem;
`

export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export const ContactBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
`

export const ContactWrapper = styled.div`
  padding: 125px 0;
`

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  padding-top: 130px;
  transition: all 0.2s ease-in-out;

`

export const ContactIcon = styled.img`
  margin-bottom: 10px;
`

export const ContactH1 = styled.h1`
  font-size: 85px;
  color: #fff;
  margin-bottom: 4px;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`

export const ContactH2 = styled.h2`
  color: #fff;
  font-size: 1.7rem;
  margin-bottom: 10px;
`
export const ContactH3 = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;
`
export const ContactNum = styled.h3`
  color: #fff;
  font-size: 1.7rem;
  font-family: 'Lato', sans-serif;
  text-align: center;
`

export const ContactP = styled.p`
  color: #fff;
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  text-align: center;
`
export const ContactHr = styled.hr`
  color: #fff;
  background-color: #fff;
`