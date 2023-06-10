import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IClientRepository } from "../protocols/Iclient.repository.protocol";
import { ICheckoutDTO } from "../dtos/Icheckout.dto";

@injectable()
class CheckoutUseCase {

    constructor(
        //@ts-ignore
        @inject("ClientRepository")
        private clientRepository: IClientRepository) { };

    async execute({
        client_cpf,
        purchase_code,
        payment
    }: ICheckoutDTO): Promise<void> {

        const client = await this.clientRepository.findByCpf(client_cpf);

        if (!client) {
            throw new AppError("Cliente não encontrado", 404);
        }

        const purchasesIndex = client.purchases.findIndex(element => element.code === purchase_code);

        if (purchasesIndex === -1) {
            throw new AppError("Carrinho não encontrado", 404);
        }

        if (client.purchases[purchasesIndex].status === "Compra Cancelada") {
            throw new AppError("Compra Cancelada pelo Usuário", 400);
        }

        client.purchases[purchasesIndex].payment = payment;
        client.purchases[purchasesIndex].status = "Pagamento Efetuado";
        client.purchases[purchasesIndex].updated_at = new Date();

        await this.clientRepository.update(client);
    }
}

export { CheckoutUseCase };