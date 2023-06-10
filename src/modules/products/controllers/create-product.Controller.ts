import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "../useCases/create-product.UseCase";

class CreateProductController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            description,
            cost_value,
            sale_value,
            deleted_at,
            category,
        } = request.body;

        const createProductUseCase = container.resolve(CreateProductUseCase);

        await createProductUseCase.execute({
            name,
            description,
            cost_value,
            sale_value,
            deleted_at,
            category,
        });
        return response.status(201).send();
    }
}

export { CreateProductController };