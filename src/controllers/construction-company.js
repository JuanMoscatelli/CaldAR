const db = require("../models");
const ConstructionCompany = db.constructionCompany;

exports.create = (req, res) => {
  if (!req.body.id_company || !req.body.cuit || !req.body.email || !req.body.buildings || !req.body.fiscal_address || !req.body.user) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const constructionCompany = new ConstructionCompany({
    id_company: req.body.id_company,
    cuit: req.body.cuit,
    email: req.body.email,
    buildings: req.body.buildings,
    fiscal_address: req.body.fiscal_address,
    user: req.body.user,
  });

  constructionCompany
    .save(constructionCompany)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Construction Company."
      });
    });
};

exports.findAll = (req, res) => {
  ConstructionCompany.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ConstructionCompany."
      });
    });
};

exports.findOne = (req, res) => {
  ConstructionCompany.findOne({id_company: req.params.id})
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `ConstructionCompany with id ${req.params.id} was not found`
        })
      }
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ConstructionCompany."
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  if (!req.body.id_technician || !req.body.rol || !req.body.type || !req.body.email || !req.body.fullname || !req.body.phone || !req.body.address || !req.body.boiler || !req.body.capabilities || !req.body.hour_rate || !req.body.daily_capacity) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  ConstructionCompany.findOneAndUpdate({id_company: id}, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Construction Company Type with id=${id}. Maybe Construction Company Type was not found!`
        });
      } else res.send({ message: "Construction Company Type was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Construction Company Type with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;
  ConstructionCompany.findOneAndRemove({id_company: id}, { useFindAndModify: false })
    .then(data =>
      res.send({ message: "Construction Company Type was removed successfully." })
    )
    .catch(err => {
      res.status(500).send({
        message: "Error removing Construction Company Type with id=" + id
      });
    });
};