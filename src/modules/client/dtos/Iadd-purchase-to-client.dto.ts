import { Product } from "@modules/products/entities/product.entity"
import { Address } from "../entities/address.entity"
import { Payment } from "../entities/payment.entity"

export interface IAddPurchaseToClientDTO {
    client_cpf: string
    code?: string
    products: Product[]
    payment: Payment
    deliveryAddress: Address
    status?: string
    delivery_at: Date
    created_at?: string
    updated_at?: string
    deleted_at?: string | null
}