import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { products } from "../product.entity";

Entity()
export class quality {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    qname: string;
    @Column({ nullable: true })
    status: number;
    @ManyToOne(()=> products, product=> product.id)
    proId: number;
}