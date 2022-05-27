const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      
      produtos_id: Joi.number().required(),
      [Segments.QUERY]: Joi.object().keys({
        user_id: Joi.string().optional(),
      }),
    }),
    [Segments.HEADERS]:Joi.object().keys({
      authorization:Joi.string().required()
    }).unknown(),
  }),

  getById: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      user_id: Joi.number().optional(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      produtos_id: Joi.number().required(),
    }),
  }),
};
