const express = require('express');
const petsRoutes = require('./routes/petsRoutes');
const cors = require('cors');


const app = express();
const PORT =  3001;
// Use the cors middleware
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/pets', petsRoutes);

app.listen(PORT, () => {
  console.log(`Server running onf port ${PORT}`);

});
