import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import { AppError } from "@shared/errors/AppError";

import { IClientRepository } from "../protocols/Iclient.repository.protocol";
import { IAddPurchaseToClientDTO } from "../dtos/Iadd-purchase-to-client.dto";
import { Purchases } from "../entities/purchases.entity";

@injectable()
class AddPurchaseToClientUseCase {

    constructor(
        //@ts-ignore
        @inject("ClientRepository")
        private clientRepository: IClientRepository) { };

    async execute({
        client_cpf,
        products,
        payment,
        deliveryAddress,
        delivery_at
    }: IAddPurchaseToClientDTO): Promise<void> {

        const client = await this.clientRepository.findByCpf(client_cpf);

        if (!client) {
            throw new AppError("Cliente não encontrado", 404);
        }

        //@ts-ignore
        const purchase: Purchases =
        {
            code: uuidv4(),
            products,
            payment,
            deliveryAddress,
            status: "Em Andamento",
            delivery_at,
            created_at: new Date(),
            updated_at: new Date()
        }

        client.purchases.push(purchase)

        await this.clientRepository.update(client);
    }
}

export { AddPurchaseToClientUseCase };