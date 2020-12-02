const db = require('../models');
const boilerTypes = db.boilerTypes;

//Create a new Boiler Type
exports.create = (req, res) => {
  if(!req.body.id_boiler_type || !req.body.id_building || !req.body.description || !req.body.skills || !req.body.stock) {
    res.status(400).send({ message: 'Content can not be empty!'});
    return;
  }
  const boilerTypes = new boilerTypes({
    id_boiler_type: req.body.id_boiler_type,
    id_building: req.body.id_building,
    description: req.body.description,
    skills: req.body.skills,
    stock: req.body.stock,
  });
  boilerTypes
    .save(boilerTypes)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while creating the Boiler Type.'
      });
    });
};

//Retrieve all Boiler Types from the DB
exports.findAll = (req, res) => {
    boilerTypes.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving Boiler Types.'
      });
    });
};

//Find a Boiler Type by ID
exports.findOne = (req, res) => {
    boilerTypes.findOne({id: req.params.id_boiler_type})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: `Boiler Type with id ${req.params.id_boiler_type} was not found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving Boiler Type.'
      });
    });
};

//Find a Boiler Type by an specific property: in this case, by DESCRIPTION
exports.findCuit = (req, res) => {
  const description = req.params.description;
  boilerTypes.findOne({description})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: `Boiler Type with cuit ${description} was not found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving Boiler Type.'
      });
    });
}

//Delete a Boiler Type by ID
exports.delete = (req, res) => {
  const id_boiler_type = req.params.id_boiler_type;
  boilerTypes.findOneAndRemove({id_boiler_type}, {useFindeAndModify: false})
    .then(data => res.send({message: `Boiler Type was removed succesfully`}))
    .catch(err => {
      res.status(500).send({
        message: `Some error ocurred while removing Boiler Type with id = ${id_boiler_type}`
      });
    });
};

//Update a Boiler Type by ID
exports.update = (req, res) => {
  if(!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!'
    });
  }
  if(!req.body.id_boiler_type || !req.body.id_building || !req.body.description || !req.body.skills || !req.body.stock) {
    res.status(400).send({ message: 'Content can not be empty!'});
    return;
  };
  const id_boiler_type = req.params.id_boiler_type;
  boilerTypes.findOneAndUpdate({id_boiler_type}, req.body, {useFindAndModify: false})
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot update Boiler Type with id = ${id_boiler_type}. Maybe Boiler Type was not found`
        });
      }
      else res.send({message: 'Boiler Type was updated succesfully'});
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Boiler Type with id = ${id_boiler_type}`
      });
    });
};