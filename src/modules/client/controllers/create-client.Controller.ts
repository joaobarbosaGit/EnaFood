import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClientUseCase } from "../useCases/create-client.UseCase";

class CreateClientController {

    async handle(request: Request, response: Response): Promise<Response> {
        
        const {
            name,
            cpf,
            phone,
            address,
            purchases,
        } = request.body;

        const createClientUseCase = container.resolve(CreateClientUseCase);

        await createClientUseCase.execute({
            name,
            cpf,
            phone,
            address,
            purchases
        });
        return response.status(201).send();
    }
}

export { CreateClientController };