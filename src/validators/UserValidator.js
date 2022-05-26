const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      CPF: Joi.string().required(),
      CEP: Joi.string().required(),
      endereco: Joi.string().required(),
      cidade: Joi.string().required(),
      estado: Joi.string().required(),
      data_nasc: Joi.string().required(),
      telefone: Joi.string().required(),
    }),
  }),

  getByFields: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      user_id: Joi.string().optional(),
      nome: Joi.string().optional(),
      email: Joi.string().optional(),
      CPF: Joi.string().optional(),
      CEP: Joi.string().optional(),
      firebase_id: Joi.string().optional(),
      endereco: Joi.string().optional(),
      cidade: Joi.string().optional(),
      estado: Joi.string().optional(),
      data_nasc: Joi.string().optional(),
      telefone: Joi.string().optional(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().optional(),
      email: Joi.string().email().optional(),
      CPF: Joi.string().optional(),
      CEP: Joi.string().optional(),
      endereco: Joi.string().optional(),
      cidade: Joi.string().optional(),
      estado: Joi.string().optional(),
      data_nasc: Joi.string().optional(),
      telefone: Joi.string().optional(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),
};