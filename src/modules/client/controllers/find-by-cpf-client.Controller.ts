import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindByCpfClientUseCase } from "../useCases/find-by-cpf-client.UseCase";

class FindByCpfClientController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { cpf } = request.params;

        const findByCpfClientUseCase = container.resolve(FindByCpfClientUseCase);

        const client = await findByCpfClientUseCase.execute(cpf);

        return response.status(200).json(client).send();
    }

}

export { FindByCpfClientController };