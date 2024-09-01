import { OrderStatusEnum } from 'src/common/enum/order-status.enum';
import { PaymentEntity } from 'src/payment/infrastructure/entites/payment.entity';
import { EntityRelationalHelper } from 'src/utils/relational-entity-helper';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'reservation',
})
export class ReservationEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: OrderStatusEnum.PENDING })
  status: string;

  @Column({ type: 'jsonb', nullable: true })
  callBackResponse: Record<string, any>;

  @Column({ nullable: true })
  reservationCode: string;

  @Column()
  email: string;

  @Column()
  personCount: number;

  @Column()
  contactNo: string;

  @Column()
  date: Date;

  @Column()
  time: string;

  @OneToOne(() => PaymentEntity, (payment) => payment.reservation, {
    nullable: true,
  })
  @JoinColumn({ name: 'paymentId' })
  payment: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
