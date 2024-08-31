import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderAbstractRepository } from './order.abstract.repository';
import { OrderEntity } from '../entites/order.entity';

@Injectable()
export class OrderRepository implements OrderAbstractRepository {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}
  findAll() {
    return this.orderRepository.find({
      relations: {
        orderItem: true,
        payment: true,
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
