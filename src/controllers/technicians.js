const db = require('../models');
const Technicians = db.technicians;

//Create and save a new technician
exports.create = (req, res) => {
    const technician = new technician({
        id_technician: req.body.id_technician,
        roll: req.body.roll,
        email: req.body.email,
        fullname: req.body.fullname,
        phone: req.body.phone,
        address: req.body.address,
        boilers: req.body.boilers,
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
    Technicians.findOne({id: req.params.id_technician})
    .then(data => {
        if (!data) {
            return res.status(404).send({
                message: `Technicians with id ${req.params.id_technician} was not found.`
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
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty."
        });
    }
    if (!req.body.id_technician || !req.body.roll || !req.body.email || !req.body.fullname || !req.body.phone || !req.body.boilers || !req.body.capabilities || !req.body.address || !req.body.hour_rate || !req.body.daily_capacity) {
        res.status(400).send({message: "Content can not be empty."});
    }
    const id = req.params.id_technician;
    Technicians.findOneAndUpdate({id}, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot update Technician with id ${id}.`
                });
            } else res.send({message: 'Technician was update successfully.'});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while updating technician.'
            });
        });
};
//Delete a technician with the specified id
exports.delete = (req, res) => {
    const id = req.params.id_technician;
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