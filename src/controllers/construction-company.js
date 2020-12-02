const db = require('../models');
const constructionCompany = db.constructionCompany;

exports.create = (req, res) => {
  if(!req.body.id_company || !req.body.cuit || !req.body.email || !req.body.id_building || !req.body.fiscal_address || !req.body.id_user) {
    res.status(400).send({ message: 'Content can not be empty!'});
    return;
  }
  const constructionCompany = new constructionCompany({
    id: req.body.id_company,
    name: req.body.cuit,
    email: req.body.email,
    hourRate: req.body.id_building,
    typeBoilers: req.body.fiscal_address,
    dailyCapacity: req.body.id_user,
  });
  constructionCompany
    .save(constructionCompany)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while creating the construction company.'
      });
    });
}

exports.findAll = (req, res) => {
  constructionCompany.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving construction companies.'
      });
    });
}

exports.findOne = (req, res) => {
  constructionCompany.findOne({id: req.params.id_company})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: `Construction company with id ${req.params.id_company} was not found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving construction company.'
      });
    });
}

exports.findCuit = (req, res) => {
  const cuit = req.params.cuit;
  constructionCompany.findOne({cuit})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: `Construction company with cuit ${cuit} was not found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving construction company.'
      });
    });
}

exports.delete = (req, res) => {
  const id_company = req.params.id_company;
  constructionCompany.findOneAndRemove({id_company}, {useFindeAndModify: false})
    .then(data => res.send({message: `Construction company was removed succesfully`}))
    .catch(err => {
      res.status(500).send({
        message: `Some error ocurred while removing construction company with id = ${id_company}`
      });
    });
}

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
          message: `Cannot update construction company with id = ${id_company}. Maybe construction company was not found`
        });
      }
      else res.send({message: 'Construction company was updated succesfully'});
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating construction company with id = ${id_company}`
      });
    });
};