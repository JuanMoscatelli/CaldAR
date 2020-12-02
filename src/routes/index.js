const constructionCompanyRouter = require('./construction-company');
const router = require('express').Router();

router.use('/construction-company', constructionCompanyRouter);

module.exports = router;