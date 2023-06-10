import { Request, Response } from "express";
import { container } from "tsyringe";

import { CancelPurchaseUseCase } from "../useCases/cancel-purchase.UseCase";

class CancelPurchaseController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            client_cpf,
            purchase_code
        } = request.body;

        const cancelPurchaseUseCase = container.resolve(CancelPurchaseUseCase);

        await cancelPurchaseUseCase.execute({
            client_cpf,
            purchase_code
        });
        return response.status(200).send();
    }

}

export { CancelPurchaseController };