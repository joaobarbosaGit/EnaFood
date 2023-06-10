import { Request, Response } from "express";
import { container } from "tsyringe";

import { DisableProductUseCase } from "../useCases/disable-product.UseCase";

class DisableProductController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { code } = request.params;

        const disableProductUseCase = container.resolve(DisableProductUseCase);

        await disableProductUseCase.execute(code);

        return response.status(201).send();
    }
}

export { DisableProductController };