const Joi = require('joi');

const createServiceValidator = Joi.object({
    name: Joi.string().required(),
    imageUrl: Joi.any().required()
})

module.exports = { createServiceValidator }