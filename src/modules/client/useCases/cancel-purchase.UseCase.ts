import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IClientRepository } from "../protocols/Iclient.repository.protocol";
import { ICancelPurchaseDTO } from "../dtos/Icancel-purchase.dto";

@injectable()
class CancelPurchaseUseCase {

    constructor(
        //@ts-ignore
        @inject("ClientRepository")
        private clientRepository: IClientRepository) { };

    async execute({
        client_cpf,
        purchase_code
    }: ICancelPurchaseDTO): Promise<void> {

        const client = await this.clientRepository.findByCpf(client_cpf);

        if (!client) {
            throw new AppError("Cliente não encontrado", 404);
        }

        const purchasesIndex = client.purchases.findIndex(element => element.code === purchase_code);

        if (purchasesIndex === -1) {
            throw new AppError("Carrinho não encontrado", 404);
        }

        if (client.purchases[purchasesIndex].status === "Pagamento Efetuado") {
            throw new AppError("Compra ja foi Finalizada pelo Usuário", 400);
        }

        client.purchases[purchasesIndex].status = "Compra Cancelada";
        client.purchases[purchasesIndex].updated_at = new Date();
        client.purchases[purchasesIndex].deleted_at = new Date();

        await this.clientRepository.update(client);
    }
}

export { CancelPurchaseUseCase };