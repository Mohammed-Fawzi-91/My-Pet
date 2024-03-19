const fs = require('fs');
const path = require('path');

const petsDataPath = path.join(__dirname, '..', 'data', 'petsData.json');




const getPets = (req, res) => {
  fs.readFile(petsDataPath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error reading pets data' });
    }

    try {
      const pets = JSON.parse(data);
      res.json(pets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Invalid JSON data' });

    }
  });
};

const addPet = (req, res) => {
 const { name, species, age } = req.body;

  fs.readFile(petsDataPath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error reading pets data' });
    }

    const pets = JSON.parse(data);
    const newPet = { name, species, age };
    console.log(name)

    pets.push(newPet);

    fs.writeFile(petsDataPath, JSON.stringify(pets, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error updating pets data' });
      }
      res.status(201).json(newPet);
    });
  });
  console.log("he")
};

module.exports = { getPets, addPet };
