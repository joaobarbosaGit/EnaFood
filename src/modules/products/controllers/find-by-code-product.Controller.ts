import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByCodeProductUseCase } from "../useCases/find-by-code-product.UseCase";

class FindByCodeProductController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { code } = request.params;

        const findByCodeProductUseCase = container.resolve(FindByCodeProductUseCase);

        const product = await findByCodeProductUseCase.execute(code);

        return response.status(200).json(product).send();
    }
}

export { FindByCodeProductController };