import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../protocols/Iproduct.repository.protocol";
import { Product } from "../entities/product.entity";
import { AppError } from "@shared/errors/AppError";


@injectable()
class FindByCodeProductUseCase {

    constructor(
        //@ts-ignore
        @inject("ProductRepository")
        private productRepository: IProductRepository) { };

    async execute(code: string): Promise<Product> {
        const product = await this.productRepository.findByCode(code);

        if (!product) {
            throw new AppError("Product not found", 404);
        }

        return product;
    }
}

export { FindByCodeProductUseCase };