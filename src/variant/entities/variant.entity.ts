import { VariantData } from 'src/variant-data/entities/variant-data.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity({ name: 'variant' })
export class Variant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('json', { default: '{}' })
  nameLang: any;

  @Column({ type: 'varchar', length: 255, nullable: true })
  dataArea: string;

  @Column('json', { default: '{}' })
  description: any;

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

  @OneToMany(() => VariantData, variantData => variantData.variant)
  variantData: VariantData[]
}
