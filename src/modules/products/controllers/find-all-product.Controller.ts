import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllProductUseCase } from "../useCases/find-all-product.UseCase";

class FindAllProductController {

    async handle(request: Request, response: Response): Promise<Response>{
                
        const findAllProductsUseCase = container.resolve(FindAllProductUseCase);

        const products = await findAllProductsUseCase.execute();

        return response.status(200).json(products).send();
    }

}

export { FindAllProductController };