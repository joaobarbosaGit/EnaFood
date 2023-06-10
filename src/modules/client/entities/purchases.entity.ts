import { Column } from "typeorm"

import { Product } from "@modules/products/entities/product.entity"
import { Payment } from "./payment.entity"
import { Address } from "./address.entity"

export class Purchases {

    @Column()
    code: string

    @Column()
    products: Product[]

    @Column()
    payment: Payment

    @Column()
    deliveryAddress: Address

    @Column()
    status: string

    @Column()
    delivery_at: Date

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    deleted_at: Date
}