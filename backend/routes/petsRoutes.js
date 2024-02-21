const express = require('express');
const router = express.Router();
const { getPets, addPet } = require('../controllers/petsController');

router.get('/', getPets);
router.post('/', addPet);

module.exports = router;
