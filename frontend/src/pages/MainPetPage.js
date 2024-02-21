import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewPetForm from '../components/NewPet';

const MainPetPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const path = "http://localhost:3001";

  useEffect(() => {
    // Fetch pets data from the backend when the component mounts
    
    fetchPets();

  }, []); // Only run this effect once when the component mounts

  const fetchPets = async () => {
    try {
      setLoading(true);

      // Make a GET request to fetch the list of pets from the backend
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
      // Make a POST request to add a new pet
      const response = await axios.post(`${path}/api/pets`, newPet);
      // Update the pets state with the newly added pet
      setPets([...pets, response.data]);
    } catch (error) {
      console.error('Error adding pet:', error);
      // Handle error, such as displaying an error message to the user
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
