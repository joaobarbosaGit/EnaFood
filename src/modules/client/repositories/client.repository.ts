
import { Repository } from "typeorm";

import { appDataSource } from "database/datasource";

import { IAddProductToPurchaseDTO } from "../dtos/iadd-product-to-purchase.dto";
import { ICreateAndUpdateClientDTO } from "../dtos/icreate-and-update-client.dto";
import { IClientRepository } from "../protocols/Iclient.repository.protocol";

import { Client } from "../entities/client.entity";

class ClientRepository implements IClientRepository {

    private repository: Repository<Client>;

    constructor() {
        this.repository = appDataSource.getMongoRepository(Client);
    }

    async create(data: ICreateAndUpdateClientDTO): Promise<Client> {
        //@ts-ignore
        await this.repository.create(data);
        //@ts-ignore
        return await this.repository.save(data);
    };

    async update(data: ICreateAndUpdateClientDTO): Promise<Client> {
        const manager = appDataSource.getMongoRepository(Client)
        //@ts-ignore
        return await manager.updateOne({cpf:data.cpf}, { $set: data});
    };

    async addProductToPurchase(dados: IAddProductToPurchaseDTO): Promise<void> {
        const manager = appDataSource.getMongoRepository(Client)
        //@ts-ignore
        return await manager.updateOne({cpf:data.cpf}, { $set: data});
    }

    async findByCpf(cpf: string): Promise<Client | null> {
        return await this.repository.findOne({
            where: {
                cpf
            }
        });
    };

    async findAll(): Promise<Client[]> {
        return await this.repository.find();
    };

    async delete(client: Client): Promise<void> {
        await this.repository.save(client);
    };
}

export { ClientRepository };