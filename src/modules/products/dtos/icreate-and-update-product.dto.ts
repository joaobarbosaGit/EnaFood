import { Category } from "../entities/category.entity"

export interface ICreateAndUpdateProductDTO {
    id?: string
    code?: string
    name: string
    description: string
    cost_value: number
    sale_value: number
    amount?: number
    active?:boolean
    created_at?: Date
    updated_at?: Date
    deleted_at?: Date
    category: Category[]
}