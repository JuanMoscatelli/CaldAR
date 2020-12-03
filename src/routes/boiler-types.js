const boilerTypes = require("../controllers/boiler-types.js");

var router = require("express").Router();

router.get("/", boilerTypes.findAll);

router.post("/", boilerTypes.create);

router.get("/:id", boilerTypes.findOne);

router.put("/:id", boilerTypes.update);

router.delete("/:id", boilerTypes.delete);

module.exports = router;
