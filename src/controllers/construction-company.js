const db = require('../models');
const constructionCompany = db.constructionCompany;

//Create a new Construction Company
exports.create = (req, res) => {
  if(!req.body.id_company || !req.body.cuit || !req.body.email || !req.body.id_building || !req.body.fiscal_address || !req.body.id_user) {
    res.status(400).send({ message: 'Content can not be empty!'});
    return;
  }
  const constructionCompany = new constructionCompany({
    id_company: req.body.id_company,
    cuit: req.body.cuit,
    email: req.body.email,
    id_building: req.body.id_building,
    fiscal_address: req.body.fiscal_address,
    id_user: req.body.id_user,
  });
  constructionCompany
    .save(constructionCompany)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while creating the Construction Company.'
      });
    });
};

//Retrieve all Construction Companies from the DB
exports.findAll = (req, res) => {
  constructionCompany.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving Construction Companies.'
      });
    });
};

//Find a company by ID
exports.findOne = (req, res) => {
  constructionCompany.findOne({id: req.params.id_company})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: `Construction Company with id ${req.params.id_company} was not found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving Construction Company.'
      });
    });
};

//Find a company by an specific property: in this case, by CUIT
exports.findCuit = (req, res) => {
  const cuit = req.params.cuit;
  constructionCompany.findOne({cuit})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: `Construction Company with cuit ${cuit} was not found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving Construction Company.'
      });
    });
}

//Delete a Construction Company by ID
exports.delete = (req, res) => {
  const id_company = req.params.id_company;
  constructionCompany.findOneAndRemove({id_company}, {useFindeAndModify: false})
    .then(data => res.send({message: `Construction Company was removed succesfully`}))
    .catch(err => {
      res.status(500).send({
        message: `Some error ocurred while removing Construction Company with id = ${id_company}`
      });
    });
};

//Update a Construction Company by ID
exports.update = (req, res) => {
  if(!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!'
    });
  }
  if(!req.body.id_company || !req.body.cuit || !req.body.email || !req.body.id_building || !req.body.fiscal_address || !req.body.id_user) {
    res.status(400).send({ message: 'Content can not be empty!'});
    return;
  };
  const id_company = req.params.id_company;
  constructionCompany.findOneAndUpdate({id_company}, req.body, {useFindAndModify: false})
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot update Construction Company with id = ${id_company}. Maybe Construction Company was not found`
        });
      }
      else res.send({message: 'Construction Company was updated succesfully'});
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Construction Company with id = ${id_company}`
      });
    });
};