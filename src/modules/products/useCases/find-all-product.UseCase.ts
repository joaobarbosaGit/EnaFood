import { inject, injectable } from "tsyringe";

import { IProductRepository } from "../protocols/Iproduct.repository.protocol";
import { Product } from "../entities/product.entity";

@injectable()
class FindAllProductUseCase {

    constructor(
        //@ts-ignore
        @inject("ProductRepository")
        private productRepository: IProductRepository) { };

    async execute(): Promise<Product[]> {
        const products = await this.productRepository.findAll();
        return products;
    }
}

export { FindAllProductUseCase };