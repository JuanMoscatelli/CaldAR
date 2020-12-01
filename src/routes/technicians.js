const technicians = require('../controllers/technicians.js');
var router = require('express').Router();

//Create a new tech
router.post('/', technicians.create);

//Update a tech with id
router.put('/:id', technicians.update);

//Delete a tech with id
router.delete('/:id', technicians.delete);

// retrieve all techs
router.get('/', technicians.findAll);

//Retrieve a single tech with id
router.get('/:id', technicians.findOne);

module.exports = router;