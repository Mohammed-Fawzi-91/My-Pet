import React, { useState } from "react";
import styles from "../styles/newPet.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const NewPetForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [newPet, setNewPet] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    // Call the onSubmit function with the new pet info
    onSubmit({ name, species, age });
    // Reset form fields
    setName("");
    setSpecies("");
    setAge("");
    // Show the welcome message
    setNewPet(false);
  };

  const addPet = () => {
    // Perform any action you want when the add icon is clicked
    console.log("Add icon clicked");
    // Hide the AddCircleIcon
    setNewPet(true);
  };

  // Function to render the welcome message
  const renderAddPet = () => {
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="species">Species:</label>
        <input
          type="text"
          id="species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Add Pet</button>
      </form>
    );
  };

  return (
    <main
      className={styles.gridContainer}
    >
      <div  className={`${styles.addIconComp} ${ newPet ? styles.newPet : ""
      }`} onClick={addPet}>
        {newPet && renderAddPet()}

        {!newPet && <AddCircleIcon className={styles.addIcon} />}
      </div>
    </main>
  );
};

export default NewPetForm;
