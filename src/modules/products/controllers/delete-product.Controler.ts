import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteProductUseCase } from "../useCases/delete-product.UseCase";

class DeleteProductController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { code } = request.params;

        const deleteProductUseCase = container.resolve(DeleteProductUseCase);

        const product = await deleteProductUseCase.execute(code);

        return response.status(200).json(product).send();
    }
}

export { DeleteProductController };