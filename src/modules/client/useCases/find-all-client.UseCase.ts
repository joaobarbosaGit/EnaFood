import { inject, injectable } from "tsyringe";

import { IClientRepository } from "../protocols/Iclient.repository.protocol";
import { Client } from "../entities/client.entity";

@injectable()
class FindAllClientUseCase {

    constructor(
        //@ts-ignore
        @inject("ClientRepository")
        private clientRepository: IClientRepository) { };

    async execute(): Promise<Client []> {
        const clients = await this.clientRepository.findAll();
        return clients;
    }
}

export { FindAllClientUseCase };