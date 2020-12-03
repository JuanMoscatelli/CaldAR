const db = require("../models");
const BoilerType = db.boilerTypes;

exports.create = (req, res) => {
  if (!req.body.id_boiler_type || !req.body.id_Buildings || !req.body.description || !req.body.skills|| !req.body.stock) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const boilerType = new BoilerType({
    id_boiler_type: req.body.id_boiler_type,
    id_Buildings: req.body.id_Buildings, 
    description: req.body.description, 
    skills: req.body.skills, 
    stock: req.body.stock, 
  });

  boilerType
    .save(boilerType)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the BoilerType."
      });
    });
};

exports.findAll = (req, res) => {
  BoilerType.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving BoilerTypes."
      });
    });
};

exports.findOne = (req, res) => {
  BoilerType.findOne({id_boiler_type: req.params.id})
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `BoilerType with id ${req.params.id} was not found`
        })
      }
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving boilerType."
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  if (!req.body.id_boiler_type || !req.body.id_Buildings || !req.body.description || !req.body.skills|| !req.body.stock) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  BoilerType.findOneAndUpdate({id_boiler_type: id}, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Boiler Type with id=${id}. Maybe Boiler Type was not found!`
        });
      } else res.send({ message: "Boiler Type was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Boiler Type with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;
  BoilerType.findOneAndRemove({id_boiler_type: id}, { useFindAndModify: false })
    .then(data =>
      res.send({ message: "Boiler Type was removed successfully." })
    )
    .catch(err => {
      res.status(500).send({
        message: "Error removing Boiler Type with id=" + id
      });
    });
};