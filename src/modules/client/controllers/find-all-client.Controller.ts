import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllClientUseCase } from "../useCases/find-all-client.UseCase";

class FindAllClientController {

    async handle(request: Request, response: Response): Promise<Response>{
                
        const findAllClientUseCase = container.resolve(FindAllClientUseCase);

        const clients = await findAllClientUseCase.execute();

        return response.status(200).json(clients).send();
    }

}

export { FindAllClientController };