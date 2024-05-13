import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewPetForm from '../components/NewPet';

const MainPetPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const path = "http://localhost:3001";

  useEffect(() => {
    
    fetchPets();

  }, []); 

  const fetchPets = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${path}/api/pets`);
      console.log("response.data")


      setPets(response.data);

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleAddPet = async (newPet) => {
    try {
      const response = await axios.post(`${path}/api/pets`, newPet);
      setPets([...pets, response.data]);
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  return (
    <div>
      <h1>Main Pet Page</h1>
      {/* Render the NewPetForm component for adding new pets */}
      <NewPetForm onSubmit={handleAddPet} />
      
      {/* Display loading indicator while fetching data */}
      {loading && <p>Loading...</p>}
      
      {/* Display error message if an error occurs */}
      {error && <p>Error: {error}</p>}
      
      {/* Display the list of pets */}
      <ul>
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
