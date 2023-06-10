import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateClientUseCase } from "../useCases/update-client.UseCase";

class UpdateClientController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            cpf,
            phone,
            address
        } = request.body;

        const updateClientUseCase = container.resolve(UpdateClientUseCase);

        await updateClientUseCase.execute({
            name,
            cpf,
            phone,
            address
        });
        return response.status(200).send();
    }

}

export { UpdateClientController };