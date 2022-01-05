import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { quality } from "./quality/quality.entity";

@Entity()
export class products{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable:true})
    pro_name_english: string;
    @Column({nullable:true})
    pro_name_sinhala: string;
    @Column({nullable:true})
    code: string;
    @Column({nullable:true})
    status: number;
    @Column({nullable:true})
    unit_type: string;
    @OneToMany(()=> quality, quality=> quality.id)
    qualities: quality[];
}