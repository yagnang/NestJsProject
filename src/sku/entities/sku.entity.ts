import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'sku' })
export class Sku {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('json', { default: '{}' })
    nameLang: object;

    @Column('json', { nullable: true, default: '{}' })
    shortDescription: object;

    @Column({ type: 'boolean', nullable: true })
    active: boolean;

    @Column({ type: 'varchar', length: 128, default: 'system' })
    createdBy: string;

    @CreateDateColumn()
    createdOn: Date;

    @Column({ type: 'varchar', length: 128, default: 'system' })
    modifiedBy: string;

    @UpdateDateColumn()
    modifiedOn: Date;

    @Column({ type: 'varchar', nullable: true })
    code: string;

    @Column({ type: 'varchar', nullable: true })
    productId: string;

    @Column({ type: 'varchar', nullable: true })
    variantsData: string;

    @Column('json', { default: '{}' })
    longDescription: object;

    @Column({ type: 'varchar', nullable: true })
    approvedBy: string;

    @Column({ type: 'varchar', nullable: true })
    webImage: string;

    @Column({ type: 'varchar', nullable: true })
    mobileImage: string;
}
