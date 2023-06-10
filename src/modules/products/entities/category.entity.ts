import { Entity, Column} from "typeorm"

export class Category {

    @Column()
    name: string

    @Column()
    description: string

}