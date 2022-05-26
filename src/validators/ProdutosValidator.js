const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      valor: Joi.string().required(),
      imagem: Joi.string().required(),
    }),
  }),

  getByFields: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      nome: Joi.string().optional(),
      produtos_id: Joi.number().optional(),

    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      produtos_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().optional(),
      valor: Joi.string().optional(),
      imagem: Joi.string().optional(),

    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      produtos_id: Joi.string().required(),
    }),
  }),
};