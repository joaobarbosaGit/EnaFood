import { inject, injectable } from "tsyringe";

import { IProductRepository } from "../protocols/Iproduct.repository.protocol";
import { ICreateAndUpdateProductDTO } from "../dtos/icreate-and-update-product.dto";
import { v4 as uuidv4 } from "uuid";

@injectable()
class CreateProductUseCase {

    constructor(
        //@ts-ignore
        @inject("ProductRepository")
        private productRepository: IProductRepository) { };

    async execute({
        name,
        description,
        cost_value,
        sale_value,
        deleted_at,
        category,
    }: ICreateAndUpdateProductDTO): Promise<void> {
        await this.productRepository.create({
            name,
            code: uuidv4(),
            description,
            cost_value,
            sale_value,
            active:true,
            created_at : new Date(),
            updated_at : new Date(),
            deleted_at,
            category
        });
    }
}

export { CreateProductUseCase };