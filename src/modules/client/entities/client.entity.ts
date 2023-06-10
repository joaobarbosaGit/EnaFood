import { Entity, Column, ObjectIdColumn, Index } from "typeorm"

import { Address } from "./address.entity"
import { Purchases } from './purchases.entity';

@Entity()
export class Client {
    
    @ObjectIdColumn()
    id: string

    @Column()
    name: string

    @Column()
    @Index({ unique: true })
    cpf: string

    @Column()
    phone: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    deleted_at?: Date

    @Column((type) => Address)
    address: Address[]

    @Column((type) => Purchases)
    purchases: Purchases[]
}