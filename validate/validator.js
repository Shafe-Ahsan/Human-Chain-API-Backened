const Joi = require("joi");

function validator(data) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    severity: Joi.string().valid("Low", "Medium", "High").required(),
  });
  
  const { error } = schema.validate(data);
  return error;
}

module.exports = validator;