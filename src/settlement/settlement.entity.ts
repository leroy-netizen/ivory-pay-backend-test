import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Merchant } from '../merchant/merchant.entity';

@Entity()
export class Settlement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @ManyToOne(() => Merchant, (merchant) => merchant.settlements)
  merchant: Merchant;
}
