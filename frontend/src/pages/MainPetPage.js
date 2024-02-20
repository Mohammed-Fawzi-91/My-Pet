import React, { useState } from 'react';
import NewPetForm from '../components/NewPet';



const MainPetPage = () => {
  const [pets, setPets] = useState([]);

  const handleAddPet = (newPet) => {
    // Update the state to include the new pet
    setPets([...pets, newPet]);
  };

  return (
    <div >
     
          
      <h1 >Main Pet Page</h1>
      <NewPetForm  onSubmit={handleAddPet}  />
      {/* Display the list of pets */}
      <ul>
        <h1>kjfe</h1>
        {pets.map((pet, index) => (
          <li key={index}>
            Name: {pet.name}, Species: {pet.species}, Age: {pet.age}
          </li>
        ))}
      </ul>

   
    </div>

    
  );
};

export default MainPetPage;
