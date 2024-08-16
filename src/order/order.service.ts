import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { TransactionService } from 'src/transaction/transaction.service';

@Injectable()
export class OrderService {
  constructor(private readonly transactionService: TransactionService) {}

  create(data: CreateOrderDto) {
    return this.transactionService.createCashOnDeliveryOrderTransaction(data);
  }
}
