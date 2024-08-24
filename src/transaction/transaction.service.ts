import { Injectable } from '@nestjs/common';
import { TransactionAbstractRepository } from './infrastructure/repositories/transaction.abstract.repository';
import { CreateOrderTransactionDto } from './dto/transaction-create-order.dto';
import { UpdatePaymentTransactionResponseDto } from 'src/payment/dto/update-payment-transaction-response.dto';
import { CreateOrderDto } from 'src/order/dto/create-order.dto';

@Injectable()
export class TransactionService {
 
  constructor(
    private readonly transactionRepository: TransactionAbstractRepository,
  ) {}

  /**
   * Transaction create staff account
   */

  async createStaff(data: any) {
    return await this.transactionRepository.createStaff(data);
  }

  async registerCustomer(data) {
    return await this.transactionRepository.registerCustomer(data);
  }

  createOnlinePaymentOrderTransaction(data: CreateOrderDto) {
    return this.transactionRepository.createOnlinePaymentOrderTransaction(data);
  }

 
  createCashOnDeliveryOrderTransaction(data: CreateOrderDto) {
   return this.transactionRepository.createCashOnDeliveryOrderTransaction(data)
  }

}
