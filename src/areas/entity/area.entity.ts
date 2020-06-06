import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AreaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phonenumber: string;

}