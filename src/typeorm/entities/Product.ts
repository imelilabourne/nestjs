import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})

export class Product {
    @PrimaryGeneratedColumn()
    variationId: number

    @Column()
    category: string

    @Column()
    variant: number

    @Column()
    unitPrice: number

    @Column()
    desc: string

    @Column()
    code: number
}