import Joi from 'joi';

export const todoSchema = Joi.object({
    id: Joi
        .number()
        .integer()
        .positive()
        .required(),
    title: Joi
        .string()
        .min(1)
        .required(),
    completed: Joi
        .boolean()
        .required()
});
