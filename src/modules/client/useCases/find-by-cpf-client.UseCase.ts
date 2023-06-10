import { inject, injectable } from "tsyringe";

import { IClientRepository } from "../protocols/Iclient.repository.protocol";
import { Client } from "../entities/client.entity";
import { AppError } from "@shared/errors/AppError";

@injectable()
class FindByCpfClientUseCase {

    constructor(
        //@ts-ignore
        @inject("ClientRepository")
        private clientRepository: IClientRepository) { };

    async execute(cpf: string): Promise<Client> {
        const client = await this.clientRepository.findByCpf(cpf);

        if(!client){
            throw new AppError("Client not found", 404);
        }

        return client;
    }
}

export { FindByCpfClientUseCase };