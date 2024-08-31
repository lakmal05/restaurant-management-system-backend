import { OrderItemEntity } from 'src/order-item/infrastructure/entites/order-item.entity';
import { EntityRelationalHelper } from 'src/utils/relational-entity-helper';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'order',
})
export class OrderEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orderCode: string;

  @Column({ type: 'text', nullable: true })
  description: string;
  
  @Column({ type: 'float', nullable: true })
  discountAmount: number;

  @Column({ type: 'float', nullable: true })
  netTotal: number;

  @Column({ type: 'float' })
  subTotal: number;

  @Column()
  paymentType: string;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order, {
    nullable: true,
  })
  orderItem: OrderItemEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
