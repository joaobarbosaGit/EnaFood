import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddPurchaseToClientUseCase } from "../useCases/add-purchase-to-client.UseCase";

class AddPurchaseToClientController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            client_cpf,
            products,
            payment,
            deliveryAddress,
            delivery_at
        } = request.body;

        const addPurchaseToClientUseCase = container.resolve(AddPurchaseToClientUseCase);

        await addPurchaseToClientUseCase.execute({
            client_cpf,
            products,
            payment,
            deliveryAddress,
            delivery_at
        });
        return response.status(200).send();
    }

}

export { AddPurchaseToClientController };