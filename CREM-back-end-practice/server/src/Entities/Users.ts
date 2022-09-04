import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @column()
    name!: string;

    @column()
    username!: string;

    @column()
    password!: string;
}



