import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background-color: white;
  max-width: 100ch;
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  
  svg {
    align-self: end;
    cursor: pointer;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  h2 {
    margin-top: 1rem;
  }
  
  p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`
