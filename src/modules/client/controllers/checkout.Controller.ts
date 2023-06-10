import { Request, Response } from "express";
import { container } from "tsyringe";

import { CheckoutUseCase } from "../useCases/checkout.UseCase";

class CheckoutController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            client_cpf,
            purchase_code,
            payment
        } = request.body;

        const checkoutUseCase = container.resolve(CheckoutUseCase);

        await checkoutUseCase.execute({
            client_cpf,
            purchase_code,
            payment
        });
        return response.status(201).send();
    }

}

export { CheckoutController };