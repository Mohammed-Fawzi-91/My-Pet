// Modal.js
import React, { useState } from 'react';
import NewPetForm from './NewPet';

const Modal = ({ onClose, onSubmit }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false); // Close the modal
    onClose(); // Call the onClose function passed from the parent component
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Add New Pet</h2>
        <NewPetForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Modal;
