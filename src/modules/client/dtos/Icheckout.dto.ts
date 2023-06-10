import { Payment } from "../entities/payment.entity"

export interface ICheckoutDTO {
    client_cpf: string
    purchase_code: string
    payment: Payment
    status?: string
    updated_at?: string
}