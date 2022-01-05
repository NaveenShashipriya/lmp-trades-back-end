import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column({nullable:true})
    mobile: string;
    @Column({nullable:true})
    gender: string;
    @Column({nullable:true})
    birthday: Date;
    @Column({nullable:true})
    addressLine1: string;
    @Column({nullable:true})
    addressLine2: string;
    @Column({nullable:true})
    addressLine3: string;
    @Column()
    status: number;
}