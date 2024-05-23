import { Variant } from 'src/variant/entities/variant.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'variant_data' })
export class VariantData {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('json', { default: '{}' })
    nameLang: object;

    @Column({ type: 'varchar', length: 255, nullable: true })
    dataArea: string;

    @Column('json', { default: '{}' })
    shortDescription: object;

    @Column({ type: 'bit', nullable: true })
    type: string;

    @Column({ type: 'boolean', nullable: true })
    active: boolean;

    @Column({ type: 'varchar', length: 128, default: 'system' })
    createdBy: string;

    @CreateDateColumn()
    createdOn: Date;

    @Column({ type: 'varchar', length: 128, default: 'system' })
    updatedBy: string;

    @UpdateDateColumn()
    updatedOn: Date;

    @Column({ type: 'varchar', length: 255 })
    code: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    hex: string;

    @Column({ type: 'varchar' })
    variant_id: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    parent_variant_id: string;

    @Column('json', { default: '{}' })
    longDescription: object;

    @Column({ type: 'varchar', length: 255 })
    approvedBy: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    webImage: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    mobileImage: string;

    @ManyToOne(() => Variant, variant => variant.variantData, { onDelete: "RESTRICT" })
    @JoinColumn({ name: 'variant_id' })
    variant: Variant

}
