const db = require("../models");
const Boiler = db.boiler;

exports.create = (req, res) => {
  if (!req.body.id_boiler || !req.body.description || !req.body.type || !req.body.maintance_rate || !req.body.hour_maintaince_cost || !req.body.hour_eventual_cost) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const boiler = new Boiler({
    id_boiler: req.body.id_boiler,
    description: req.body.description,
    type: req.body.type,
    maintance_rate: req.body.maintance_rate,
    hour_maintaince_cost: req.body.hour_maintaince_cost,
    hour_eventual_cost: req.body.hour_eventual_cost,
  });

  boiler
    .save(boiler)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Boiler."
      });
    });
};

exports.findAll = (req, res) => {
  Boiler.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Boiler."
      });
    });
};

exports.findOne = (req, res) => {
  Boiler.findOne({id_boiler: req.params.id})
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Boiler with id ${req.params.id} was not found`
        })
      }
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Boiler."
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  if (!req.body.id_boiler || !req.body.description || !req.body.type || !req.body.maintance_rate || !req.body.hour_maintaince_cost || !req.body.hour_eventual_cost) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Boiler.findOneAndUpdate({id_boiler: id}, req.body, { useFindAndModify: false })
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
  Boiler.findOneAndRemove({id_boiler: id}, { useFindAndModify: false })
    .then(data =>
      res.send({ message: "Boiler Type was removed successfully." })
    )
    .catch(err => {
      res.status(500).send({
        message: "Error removing Boiler Type with id=" + id
      });
    });
};