const db = require("../models");
const Technician = db.technician;

exports.create = (req, res) => {
  if (!req.body.id_technician || !req.body.rol || !req.body.type || !req.body.email || !req.body.fullname || !req.body.phone || !req.body.address || !req.body.boiler || !req.body.capabilities || !req.body.hour_rate || !req.body.daily_capacity) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const technician = new Technician({
    id_technician: req.body.id_technician,
    rol: req.body.rol,
    email: req.body.email,
    fullname: req.body.fullname,
    phone: req.body.phone,
    address: req.body.address,
    boiler: req.body.boiler,
    capabilities: req.body.capabilities,
    hour_rate: req.body.hour_rate,
    daily_capacity: req.body.daily_capacity,
  });

  technician
    .save(technician)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Technician."
      });
    });
};

exports.findAll = (req, res) => {
  Technician.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Technician."
      });
    });
};

exports.findOne = (req, res) => {
  Technician.findOne({id_technician: req.params.id})
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: `Technician with id ${req.params.id} was not found`
        })
      }
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Technician."
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  if (!req.body.id_company || !req.body.cuit || !req.body.email || !req.body.buildings || !req.body.fiscal_address || !req.body.user) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Technician.findOneAndUpdate({id_technician: id}, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Technician Type with id=${id}. Maybe Technician Type was not found!`
        });
      } else res.send({ message: "Technician Type was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Technician Type with id=" + id
      });
    });
  
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Technician.findOneAndRemove({id_technician: id}, { useFindAndModify: false })
    .then(data =>
      res.send({ message: "Technician Type was removed successfully." })
    )
    .catch(err => {
      res.status(500).send({
        message: "Error removing Technician Type with id=" + id
      });
    });
};