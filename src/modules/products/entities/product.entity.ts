import { Entity, Column, ObjectIdColumn, Index } from "typeorm"
import { Category } from "./category.entity"

@Entity()
export class Product {
    
    @ObjectIdColumn()
    id: string

    @Column()
    @Index({ unique: true })
    code: string

    @Column()
    @Index({ unique: true })
    name: string

    @Column()
    description: string

    @Column()
    cost_value: number
    
    @Column()
    sale_value: number

    @Column()
    amount: number

    @Column()
    active: boolean

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    deleted_at: Date

    @Column((type) => Category)
    category: Category[]

}