import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Register {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name: string

    @Column()
    username: string

    @Column()
    password: string
}
