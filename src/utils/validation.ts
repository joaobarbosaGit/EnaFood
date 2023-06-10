import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express"

const validationRegex: any = {
  email: {
    regex: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
  }
}

function validate(schema: any) {
  const validation = (request: Request, response: Response, next: NextFunction) => {

    const { body } = request;
    const errors: string[] = [];

    Object.keys(schema).forEach(item => {


      const itemSchema = schema[item]

      if (itemSchema.required && !body[item]) {
        throw new AppError(`Campo ${item} - não pode ser nulo`, 500);
      }

      if (itemSchema.min && (body[item].length < itemSchema.min)) {
        throw new AppError(`Campo ${item} - possui um tamanho minimo de: ${itemSchema.min}`, 500);
      }

      if (itemSchema.max && (body[item].length > itemSchema.max)) {
        throw new AppError(`Campo ${item} - possui um tamanho máximo de: ${itemSchema.max}`, 500);
      }

      const regexItem: any = validationRegex[item];

      if (regexItem && (!new RegExp(regexItem.regex).test(body[item]))) {
        throw new AppError(`Campo ${item} - está no formato incorreto`, 500);
      }

      if (itemSchema.isNumber && typeof body[item] !== "number") {
        throw new AppError(`Campo ${item} - deve ser um numero!`, 500);
      }

      if (itemSchema.isString && typeof body[item] !== "string") {
        throw new AppError(`Campo ${item} - deve ser uma string!`, 500);
      }

    })

    if (errors.length > 0) return response.status(400).json(errors)

    return next();
  }

  return validation;
}

export { validate }