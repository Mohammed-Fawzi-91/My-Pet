import React, { useState } from 'react';

const NewPetForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    // Call the onSubmit function with the new pet info
    onSubmit({ name, species, age });
    // Reset form fields
    setName('');
    setSpecies('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} placeholder="Species" required />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
      <button type="submit">Add Pet</button>
    </form>
  );
};

export default NewPetForm;
