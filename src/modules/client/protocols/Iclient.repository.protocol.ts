
import { IAddProductToPurchaseDTO } from "../dtos/iadd-product-to-purchase.dto";
import { ICreateAndUpdateClientDTO } from "../dtos/icreate-and-update-client.dto";
import { Client } from "../entities/client.entity";

export interface IClientRepository {
    create(dados: ICreateAndUpdateClientDTO): Promise<Client>;
    update(dados: ICreateAndUpdateClientDTO): Promise<Client>;
    addProductToPurchase(dados: IAddProductToPurchaseDTO): Promise<void>;
    findByCpf(cpf: string): Promise<Client | null>;
    findAll(): Promise<Client[]>;
    delete(client: Client): Promise<void>;
}