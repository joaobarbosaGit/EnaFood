import { inject, injectable } from "tsyringe";

import { IClientRepository } from "../protocols/Iclient.repository.protocol";
import { ICreateAndUpdateClientDTO } from "../dtos/icreate-and-update-client.dto";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateClientUseCase {

    constructor(
        //@ts-ignore
        @inject("ClientRepository")
        private clientRepository: IClientRepository) { };

    async execute({
        name,
        cpf,
        phone,
        address
    }: ICreateAndUpdateClientDTO): Promise<void> {

        const client = await this.clientRepository.findByCpf(cpf);

        if (!client) {
            throw new AppError("Client not found", 404);
        }
        
        await this.clientRepository.update({
            name,
            cpf:client.cpf,
            phone,
            address,
            updated_at : new Date()
        });
    }
}

export { UpdateClientUseCase };