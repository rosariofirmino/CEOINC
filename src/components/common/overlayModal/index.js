import React from 'react';
import { Modal, ModalContent, ModalHeader } from './overlayModalElements';
import { FaTimes } from 'react-icons/fa';

const OverlayModal = (props) => {
  const { isOpen, setIsOpen, title, description, onClose } = props;

  if (!isOpen) return null;

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <FaTimes color='#5A5A5A' onClick={() => {setIsOpen(false); onClose()}} />
          <h2>{title}</h2>
          <hr />
          <p>{description}</p>
        </ModalHeader>

        {props.children}

      </ModalContent>
    </Modal>
  );
};

export default OverlayModal;
