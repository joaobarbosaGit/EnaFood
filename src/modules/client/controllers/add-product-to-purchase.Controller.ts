import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddProductToPurchaseUseCase } from "../useCases/add-product-to-purchase.UseCase";

class AddProductToPurchaseController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            client_cpf,
            product_code,
            purchase_code,
            name,
            description,
            sale_value
        } = request.body;

        const addProductToPurchaseUseCase = container.resolve(AddProductToPurchaseUseCase);

        await addProductToPurchaseUseCase.execute({
            client_cpf,
            product_code,
            purchase_code,
            name,
            description,
            sale_value
        });
        return response.status(200).send();
    }

}

export { AddProductToPurchaseController };