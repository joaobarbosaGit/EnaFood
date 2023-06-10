import { Address } from "../entities/address.entity"
import { Purchases } from "../entities/purchases.entity"

export interface ICreateAndUpdateClientDTO {
    id?: string
    name: string
    cpf: string
    phone: string
    created_at?: Date
    updated_at?: Date
    deleted_at?: Date | null
    address: Address[]
    purchases?: Purchases[]
}