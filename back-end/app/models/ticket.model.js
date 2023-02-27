const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Ticket', {
  title: Joi.string().required(),
  date: Joi.date().required(),
  studentId: Joi.string().required(),
  description: Joi.string(),
  major: Joi.string(),
  archived: Joi.boolean(),
});
