
import { Repository } from "typeorm";

import { appDataSource } from "database/datasource";
import { Product } from "../entities/product.entity";

import { IProductRepository } from "../protocols/Iproduct.repository.protocol";
import { ICreateAndUpdateProductDTO } from "../dtos/icreate-and-update-product.dto";

class ProductRepository implements IProductRepository {

    private repository: Repository<Product>;

    constructor() {
        this.repository = appDataSource.getMongoRepository(Product);
    }

    async create(data: ICreateAndUpdateProductDTO): Promise<Product> {
        await this.repository.create(data);
        return await this.repository.save(data);
    };

    async update(data: ICreateAndUpdateProductDTO): Promise<Product> {
        const manager = appDataSource.getMongoRepository(Product)
        //@ts-ignore
        return await manager.updateOne({code:data.code}, { $set: data});
    };

    async enable(code: string): Promise<Product> {
        const manager = appDataSource.getMongoRepository(Product)
        //@ts-ignore
        return await manager.updateOne({code:code}, { $set: {active:true}});
    };

    async disable(code: string): Promise<Product> {
        const manager = appDataSource.getMongoRepository(Product)
        //@ts-ignore
        return await manager.updateOne({code:code}, { $set: {active:false}});
    };

    async findByCode(code: string): Promise<Product | null> {
        return await this.repository.findOne({
            where:{
                code
            }
        });
    };

    async findAll(): Promise<Product[]> {
        return await this.repository.find();
    };

    async listActiveProducts(): Promise<Product[]> {
        return await this.repository.find({
            where:{
                active:true
            }
        });
    };

    async delete(product: Product): Promise<void> {
        await this.repository.save(product);
    };
}

export { ProductRepository };