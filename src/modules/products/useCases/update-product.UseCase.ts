import { inject, injectable } from "tsyringe";

import { IProductRepository } from "../protocols/Iproduct.repository.protocol";
import { ICreateAndUpdateProductDTO } from "../dtos/icreate-and-update-product.dto";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateProductUseCase {

    constructor(
        //@ts-ignore
        @inject("ProductRepository")
        private productRepository: IProductRepository) { };

    async execute({
        name,
        code,
        description,
        cost_value,
        sale_value,
        active,
        deleted_at,
        category,
    }: ICreateAndUpdateProductDTO): Promise<void> {

        if(!code){
            throw new AppError("Product Code uninformed", 400);
        }

        const product = await this.productRepository.findByCode(code);

        if (!product) {
            throw new AppError("Product not found", 404);
        }

        await this.productRepository.update({
            name,
            code,
            description,
            cost_value,
            sale_value,
            active,
            updated_at : new Date(),
            deleted_at,
            category
        });
    }
}

export { UpdateProductUseCase };