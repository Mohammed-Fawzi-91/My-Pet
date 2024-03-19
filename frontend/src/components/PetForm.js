import React from "react";
import styles from "../styles/newPet.module.css";

const PetForm = ({ name, setName, species, setSpecies, age, setAge, onSubmit }) => {
  const handleSubmit = (e) => {
    onSubmit();
  };

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

export default PetForm;
