import { Column } from "typeorm"

export class Address {

    @Column()
    address: string

    @Column()
    complement: string

    @Column()
    zipCode: string

    @Column()
    neighborhood: string

}