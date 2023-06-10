import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteClientUseCase } from "../useCases/delete-client.UseCase";


class DeleteClientController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { cpf } = request.params;

        const deleteClientUseCase = container.resolve(DeleteClientUseCase);

        const client = await deleteClientUseCase.execute(cpf);

        return response.status(200).json(client).send();
    }

}

export { DeleteClientController };