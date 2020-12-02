const boilerTypes = require('../controllers/boiler-types.js');
const router = require('express').Router();

//Create a new Boiler Type
router.post('/addNew', boilerTypes.create);

//Update a Boiler Type by id
router.put('/updateById/:id_boiler_type', boilerTypes.update);

//Delete a Boiler Type by id
router.delete('/deleteById/:id_boiler_type', boilerTypes.delete);

//Retrieve all Boiler Types
router.get('/getAll', boilerTypes.findAll);

//Retrieve Boiler Type by ID
router.get('/getById/:id_boiler_type', boilerTypes.findOne);

////Retrieve Boiler Type by type (DESCRIPTION)
router.get('/getByType/:description', boilerTypes.findDescription);

module.exports = router;