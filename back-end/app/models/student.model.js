
const Joi = require('joi');
const BaseModel = require('../utils/base-model');

module.exports = new BaseModel('Student', {
  FirstName: Joi.string().required(),
  LastName: Joi.string().required(),
  notes: Joi.string().required(),
  image: Joi.string().required(),
  email: Joi.string().required(),
});
