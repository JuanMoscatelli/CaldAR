const constructionCompany = require("../controllers/construction-company.js");

var router = require("express").Router();

router.get("/", constructionCompany.findAll);

router.post("/", constructionCompany.create);

router.get("/:id", constructionCompany.findOne);

router.put("/:id", constructionCompany.update);

router.delete("/:id", constructionCompany.delete);

module.exports = router;
