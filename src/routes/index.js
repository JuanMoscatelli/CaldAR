// const { route } = require('./buildings');
const BuildingsRouter = require('./buildings')
const BoilerTypesRouter = require('./boiler-types')
const BoilersRouter = require('./boilers')
const ConstructionCompanyRouter = require('./construction-company')
const TechniciansRouter = require('./technicians')

var router = require("express").Router();

router.use('/buildings', BuildingsRouter)
router.use('/boiler-types', BoilerTypesRouter)
router.use('/boilers', BoilersRouter)
router.use('/construction-company', ConstructionCompanyRouter)
router.use('/technicians', TechniciansRouter)

module.exports = router;