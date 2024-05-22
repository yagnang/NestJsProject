import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Variant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('json', { default: '{}' })
  nameLang: any;

  @Column({ nullable: true })
  dataArea: string;

  @Column('json', { default: '{}' })
  description: any;

  @Column({ type: 'bit', nullable: true })
  type: string;

  @Column({ nullable: true })
  active: boolean;

  @Column({ length: 128, default: 'system' })
  createdBy: string;

  @CreateDateColumn()
  createdOn: Date;

  @Column({ length: 128, default: 'system' })
  updatedBy: string;

  @UpdateDateColumn()
  updatedOn: Date;
}
