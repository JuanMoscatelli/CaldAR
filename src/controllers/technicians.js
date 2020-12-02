const db = require('../models');
const Technicians = db.technicians;

//Create and save a new technician
exports.create = (req, res) => {
    const technicians = new Technicians({
        id_technicians: req.body.id_technicians,
        rol: req.body.rol,
        email: req.body.email,
        fullname: req.body.fullname,
        phone: req.body.phone,
        address: req.body.address,
        boilers: req.body.boilers,
        capabilities: req.body.capabilities,
        hour_rate: req.body.hour_rate,
        daily_capacity: req.body.daily_capacity,
    });
    technicians
        .save(technicians)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the Technician.'
            });
        });
};

//Retrieve all technicians fron the database.
exports.findAll = (req, res) => {
    Technicians.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Some error occurred while retrieving Technicians.'
        });
    });
};
//Find a single technician with an id
exports.findOne = (req, res) => {
    Technicians.findOne({id_technicians: req.params.id})
    .then(data => {
        if (!data) {
            return res.status(404).send({
                message: `Technicians with id ${req.params.id} was not found.`
            })
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Some error occurred while retrieving technician.'
        });
    });
};
//Update a technician by the id 

exports.update = (req, res) => {
    if(!req.body.id_technicians || !req.body.rol || !req.body.email || !req.body.address || !req.body.fullname || !req.body.phone || !req.body.boilers || !req.body.capabilities || !req.body.hour_rate || !req.body.daily_capacity){
      return res.status(400).send({
        message: `Content cannot be empty!`
      })
    }
    Technicians.findOneAndUpdate({id_technicians: req.body.id_technicians}, req.body, {useFindAndModify: false})
    .then(data => 
      res.send({message: `Technician was updated`})
    )
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while updating technician."
      });
    });
  };
  
//Delete a technician with the specified id
exports.delete = (req, res) => {
    const id = req.params.id_technicians;
    Technicians.findOneAndRemove({id}, {useFindAndModify: false})
    .then(data =>
        res.send({ message: "Technician was remove successfully"})
    )
    .catch(err => {
        res.status(500).send({
            message: `Error removing technician with id ${id}.`
        });
    });
};