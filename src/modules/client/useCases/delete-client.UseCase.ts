import { inject, injectable } from "tsyringe";

import { IClientRepository } from "../protocols/Iclient.repository.protocol";
import { AppError } from "@shared/errors/AppError";
import { Client } from "../entities/client.entity";

@injectable()
class DeleteClientUseCase {

    constructor(
        //@ts-ignore
        @inject("ClientRepository")
        private clientRepository: IClientRepository) { };

    async execute(cpf: string): Promise<Client> {
        const client = await this.clientRepository.findByCpf(cpf);

        if(!client){
            throw new AppError("Client not found", 404);
        }

        client.updated_at = new Date();
        client.deleted_at = new Date();

        await this.clientRepository.delete(client);

        return client;
    }
}

export { DeleteClientUseCase };