const constructionCompany = require('../controllers/construction-company.js');
const router = require('express').Router();

//Create a new Construction Company
router.post('/addNew', constructionCompany.create);

//Update a Construction Company by id
router.put('/updateById/:id_company', constructionCompany.update);

//Delete a Construction Company by id
router.delete('/deleteById/:id_company', constructionCompany.delete);

//Retrieve all Construction Companies
router.get('/getAll', constructionCompany.findAll);

//Retrieve Construction Companies by ID
router.get('/getById/:id_company', constructionCompany.findOne);

////Retrieve Construction Companies by type (CUIT)
router.get('/getByType/:cuit', constructionCompany.findCuit);

module.exports = router;