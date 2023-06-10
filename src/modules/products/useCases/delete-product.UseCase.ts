import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProductRepository } from "../protocols/Iproduct.repository.protocol";
import { Product } from "../entities/product.entity";

@injectable()
class DeleteProductUseCase {

    constructor(
        //@ts-ignore
        @inject("ProductRepository")
        private productRepository: IProductRepository) { };

    async execute(code: string): Promise<Product> {
        const product = await this.productRepository.findByCode(code);

        if (!product) {
            throw new AppError("Product not found", 400);
        }

        product.updated_at = new Date();
        product.deleted_at = new Date();

        await this.productRepository.delete(product);

        return product;
    }
}

export { DeleteProductUseCase };