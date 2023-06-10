import { inject, injectable } from "tsyringe";

import { IProductRepository } from "../protocols/Iproduct.repository.protocol";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DisableProductUseCase {

    constructor(
        //@ts-ignore
        @inject("ProductRepository")
        private productRepository: IProductRepository) { };

    async execute( code : string): Promise<void> {

        if(!code){
            throw new AppError("Product Code uninformed", 400);
        }

        const product = await this.productRepository.findByCode(code);

        if (!product) {
            throw new AppError("Product not found", 404);
        }

        await this.productRepository.disable(code);
    }
}

export { DisableProductUseCase };