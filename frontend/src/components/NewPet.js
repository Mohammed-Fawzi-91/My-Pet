import React, { useState } from "react";
import styles from "../styles/newPet.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PetForm from "./PetForm";

const NewPetForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = () => {
    onSubmit({ name, species, age });
    setName("");
    setSpecies("");
    setAge("");
    setShowForm(false);
  };

  const toggleForm = (e) => {
    // Check if the click event originates from within the form
    if (!e.target.closest("form")) {
      // If not, toggle the form visibility
      setShowForm((prev) => !prev);
    }
  };

  // Handle clicking on the form

  return (
    <main className={styles.gridContainer} >
      <div className={`${styles.addIconComp} ${showForm ? styles.newPet : ""}`} >
        {showForm ? (
          <PetForm
            name={name}
            setName={setName}
            species={species}
            setSpecies={setSpecies}
            age={age}
            setAge={setAge}
            onSubmit={handleSubmit}
          />
        ) : (
          <AddCircleIcon className={styles.addIcon}  onClick={toggleForm} />
        )}
      </div>
    </main>
  );
};

export default NewPetForm;
