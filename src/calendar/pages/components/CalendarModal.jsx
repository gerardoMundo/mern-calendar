import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  function closeModal() {
    setIsOpen(false);
    console.log('cerrando modal');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1>Hola trunos!</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </Modal>
  );
};
