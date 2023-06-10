import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductUseCase } from "../useCases/update-product.UseCase";

class UpdateProductController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            code,
            description,
            cost_value,
            sale_value,
            active,
            deleted_at,
            category,
        } = request.body;

        const updateProductUseCase = container.resolve(UpdateProductUseCase);

        await updateProductUseCase.execute({
            name,
            code,
            description,
            cost_value,
            sale_value,
            active,
            deleted_at,
            category,
        });
        return response.status(201).send();
    }

}

export { UpdateProductController };