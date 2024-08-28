import { Injectable } from '@nestjs/common';
import { PaymentAbstractRepository } from './infrastructure/repositories/payment.abstract.repository';
import { PaymentFiltersDto } from './dto/payment-filters.dto';
import { TransactionService } from 'src/transaction/transaction.service';
import { AdvancePaymentDto } from './dto/advancePayment.dto';

@Injectable()
export class PaymentService {
  makeAdvancePayment //   return this.transactionService.updateOnlineTransactionResponseByOrderId(
    (data: AdvancePaymentDto) {
      throw new Error('Method not implemented.');
  }
  constructor(
    private readonly paymentRepository: PaymentAbstractRepository,
    // private readonly transactionService:TransactionService
  ) {}

  // updateOnlineTransactionResponseByOrderId(
  //   orderId: string,
  //   data,
  // ) {
  //   return this.transactionService.updateOnlineTransactionResponseByOrderId(
  //     orderId,
  //     data,
  //   );
  // }

  findAll(filters: PaymentFiltersDto) {
    return this.paymentRepository.findAll(filters);
  }
}
