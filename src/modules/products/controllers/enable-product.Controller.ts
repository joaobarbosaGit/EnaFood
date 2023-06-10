import { Request, Response } from "express";
import { container } from "tsyringe";

import { EnableProductUseCase } from "../useCases/enable-product.UseCase";

class EnableProductController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { code } = request.params;

        const enableProductUseCase = container.resolve(EnableProductUseCase);

        await enableProductUseCase.execute(code);

        return response.status(201).send();
    }
}

export { EnableProductController };