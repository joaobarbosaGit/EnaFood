import { inject, injectable } from "tsyringe";

import { IClientRepository } from "../protocols/Iclient.repository.protocol";
import { ICreateAndUpdateClientDTO } from "../dtos/icreate-and-update-client.dto";

@injectable()
class CreateClientUseCase {

    constructor(
        //@ts-ignore
        @inject("ClientRepository")
        private clientRepository: IClientRepository) { };

    async execute({
        name,
        cpf,
        phone,
        address,
        purchases
    }: ICreateAndUpdateClientDTO): Promise<void> {
        await this.clientRepository.create({
            name,
            cpf,
            phone,
            address,
            purchases,
            created_at : new Date(),
            updated_at : new Date(),
            deleted_at: null
        });
    }
}

export { CreateClientUseCase };