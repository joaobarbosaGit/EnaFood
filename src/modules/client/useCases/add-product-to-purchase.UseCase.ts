import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IClientRepository } from "../protocols/Iclient.repository.protocol";
import { IAddProductToPurchaseDTO } from "../dtos/iadd-product-to-purchase.dto";
import { Product } from "@modules/products/entities/product.entity";

@injectable()
class AddProductToPurchaseUseCase {

    constructor(
        //@ts-ignore
        @inject("ClientRepository")
        private clientRepository: IClientRepository) { };

    async execute({
        client_cpf,
        product_code,
        purchase_code,
        name,
        description,
        sale_value
    }: IAddProductToPurchaseDTO): Promise<void> {

        const client = await this.clientRepository.findByCpf(client_cpf);

        if (!client) {
            throw new AppError("Cliente não encontrado", 404);
        }

        const purchasesIndex = client.purchases.findIndex(element => element.code === purchase_code);

        if (purchasesIndex === -1) {
            throw new AppError("Cliente sem carrinho disponivel", 400);
        }

        if (client.purchases[purchasesIndex].status === "Compra Cancelada") {
            throw new AppError("Compra Cancelada pelo Usuário", 400);
        }

        if (client.purchases[purchasesIndex].products.length === 0) {

            //@ts-ignore
            const product: Product =
            {
                code: product_code,
                name,
                description,
                sale_value,
                amount: 1
            }

            client.purchases[purchasesIndex].products.push(product);

            await this.clientRepository.update(client);

            return;
        }

        client.purchases[purchasesIndex].products.map((product) => {
            if (product.code === product_code) {
                product.amount ++;
            } else {
                product.amount = 1;
            }
        });

        await this.clientRepository.update(client);
    }
}

export { AddProductToPurchaseUseCase };