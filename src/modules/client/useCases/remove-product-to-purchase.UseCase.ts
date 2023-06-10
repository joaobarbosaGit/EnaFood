import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IClientRepository } from "../protocols/Iclient.repository.protocol";
import { IRemoveProductToPurchaseDTO } from "../dtos/Iremove-product-to-purchase.dto";

@injectable()
class RemoveProductToPurchaseUseCase {

    constructor(
        //@ts-ignore
        @inject("ClientRepository")
        private clientRepository: IClientRepository) { };

    async execute({
        client_cpf,
        purchase_code,
        product_code
    }: IRemoveProductToPurchaseDTO): Promise<void> {

        const client = await this.clientRepository.findByCpf(client_cpf);

        if (!client) {
            throw new AppError("Cliente não encontrado", 404);
        }

        const purchasesIndex = client.purchases.findIndex(element => element.code === purchase_code);

        if (purchasesIndex === -1) {
            throw new AppError("Carrinho não encontrado", 404);
        }

        if (client.purchases[purchasesIndex].products.length <= 0) {
            throw new AppError("O Carrinho informado não possui nenhum produto", 400);
        }

        client.purchases[purchasesIndex].products.map((product) => {
            if (product.code === product_code && product.amount >= 2) {
                product.amount--;
            } else if (product.code === product_code && product.amount === 1) {
                client.purchases[purchasesIndex].products = [];
            } else {
                throw new AppError("O Carrinho informado não possui o produto informado", 400);
            }
        });

        await this.clientRepository.update(client);
    }
}

export { RemoveProductToPurchaseUseCase };