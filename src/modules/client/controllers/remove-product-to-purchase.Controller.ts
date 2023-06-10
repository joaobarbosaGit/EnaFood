import { Request, Response } from "express";
import { container } from "tsyringe";

import { RemoveProductToPurchaseUseCase } from "../useCases/remove-product-to-purchase.UseCase";

class RemovePurchaseToClientController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            client_cpf,
            purchase_code,
            product_code
        } = request.body;

        const removeProductToPurchaseUseCase = container.resolve(RemoveProductToPurchaseUseCase);

        await removeProductToPurchaseUseCase.execute({
            client_cpf,
            purchase_code,
            product_code
        });
        return response.status(200).send();
    }

}

export { RemovePurchaseToClientController };