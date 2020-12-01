console.log('Hello');
const { route } = require('./technicians');
const techniciansRouter = require('./technicians');

var router = require('express').Router();
router.use('/technicians', techniciansRouter);

module.exports = router;