const db = require("../models");
const Building = db.building;

exports.create = (req, res) => {

  if (!req.body.fullName || !req.body.address || !req.body.phone || !req.body.boilers|| !req.body.id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const building = new Building({
    id: req.body.id,
    fullName: req.body.fullName,
    address: req.body.address,
    phone: req.body.phone,
    boilers: req.body.boilers,
  });

  building
    .save(building)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Building."
      });
    });
};

exports.findAll = (req, res) => {
  Building.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving buildings."
      });
    });
};

exports.findOne = (req, res) => {
  Building.findOne({id: req.params.id})
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Building with id ${req.params.id} was not found`
        })
      }
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving building."
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  if (!req.body.fullName || !req.body.address || !req.body.phone || !req.body.boilers|| !req.body.id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Building.findOneAndUpdate({id}, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Building with id=${id}. Maybe Building was not found!`
        });
      } else res.send({ message: "Building was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Building with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Building.findOneAndRemove({id}, { useFindAndModify: false })
    .then(data =>
      res.send({ message: "Building was removed successfully." })
    )
    .catch(err => {
      res.status(500).send({
        message: "Error removing Building with id=" + id
      });
    });
};