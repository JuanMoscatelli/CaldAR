const technicians = require("../controllers/technicians.js");

var router = require("express").Router();

router.get("/", technicians.findAll);

router.post("/", technicians.create);

router.get("/:id", technicians.findOne);

router.put("/:id", technicians.update);

router.delete("/:id", technicians.delete);

module.exports = router;
