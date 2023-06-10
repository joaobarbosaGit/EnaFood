import { Product } from "../entities/product.entity";
import { ICreateAndUpdateProductDTO } from "../dtos/icreate-and-update-product.dto";

export interface IProductRepository {
    create(dados: ICreateAndUpdateProductDTO): Promise<Product>;
    update(dados: ICreateAndUpdateProductDTO): Promise<Product>;
    disable(code: string): Promise<Product>;
    enable(code: string): Promise<Product>;
    findByCode(code: string): Promise<Product | null>;
    findAll(): Promise<Product[]>;
    listActiveProducts(): Promise<Product[]>;
    delete(product: Product): Promise<void>;
}