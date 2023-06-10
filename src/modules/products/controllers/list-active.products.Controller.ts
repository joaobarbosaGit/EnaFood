import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListActiveProductsUseCase } from "../useCases/list-active.products.UseCase";

class ListActiveProductsController {

    async handle(request: Request, response: Response): Promise<Response>{
                
        const listActiveProductsUseCase = container.resolve(ListActiveProductsUseCase);

        const products = await listActiveProductsUseCase.execute();

        return response.status(200).json(products).send();
    }
}

export { ListActiveProductsController };