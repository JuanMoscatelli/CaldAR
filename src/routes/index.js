const boilerTypesRouter = require('./boiler-types');
const router = require('express').Router();

router.use('/boiler-types', boilerTypesRouter);

module.exports = router;