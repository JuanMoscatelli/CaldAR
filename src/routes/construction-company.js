const constructionCompany = require('../controllers/construction-company.js');
const router = require('express').Router();

router.post('/addNew', constructionCompany.create);
router.put('/updateById/:id_company', constructionCompany.update);
router.delete('/deleteById/:id_company', constructionCompany.delete);
router.get('/getAll', constructionCompany.findAll);
router.get('/getById/:id_company', constructionCompany.findOne);
router.get('/getByType/:cuit', constructionCompany.findName);

module.exports = router;