import { container } from "tsyringe";

import { IClientRepository } from "@modules/client/protocols/Iclient.repository.protocol";
import { ClientRepository } from "@modules/client/repositories/client.repository";

import { IProductRepository } from "@modules/products/protocols/Iproduct.repository.protocol";
import { ProductRepository } from "@modules/products/repositories/product.repository";

container.registerSingleton<IClientRepository>(
    "ClientRepository",
    ClientRepository
);

container.registerSingleton<IProductRepository>(
    "ProductRepository",
    ProductRepository
);