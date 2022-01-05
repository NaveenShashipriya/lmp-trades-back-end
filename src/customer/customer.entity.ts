import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class customers {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    name: string;
    @Column({ nullable: true })
    mobile_no: string;
    @Column({ nullable: true })
    address: string;
    @Column({ nullable: true })
    cre_date: Date;

}