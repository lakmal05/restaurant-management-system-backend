import { Injectable } from '@nestjs/common';
import { PaymentAbstractRepository } from './payment.abstract.repository';
// import { UpdatePayementTransactionResponseDto } from 'src/payment/dto/update-payment-transaction-response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from '../entites/payment.entity';
import { Repository } from 'typeorm';
import { FindAllPaymentMapper } from '../mappers/find-all-payment.mapper';
import { PaymentFiltersDto } from 'src/payment/dto/payment-filters.dto';
import { AdvancePaymentDto } from 'src/payment/dto/advancePayment.dto';

@Injectable()
export class PaymentRepository implements PaymentAbstractRepository {
  constructor(
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,
  ) {}
  makeAdvancePayment(data: AdvancePaymentDto) {
    return this.paymentRepository.create({
      amount: data.amount,
      callBackResponse: data.cardDetails,
    });
  }

  async findAll(filters: PaymentFiltersDto) {
    const page: number = filters.page || 0;
    const perPage: number = filters.perPage || 15;

    const { orderCode } = filters;
    const queryBuilder = await this.paymentRepository
      .createQueryBuilder('payment')
      .leftJoinAndSelect('payment.order', 'order');

    // if (orderCode) {
    //   query.andWhere('order.orderCode = :orderCode', { orderCode });
    // }

    if (filters.orderCode) {
      queryBuilder.andWhere(
        '(order.orderCode ILIKE :orderCode OR order.orderCode ILIKE :orderCode)',
        { orderCode: `%${filters.orderCode}%` },
      );
    }

    // if (filters.paymnetStatus) {
    //   query.andWhere('payment.status = :status', { paymnetStatus });
    // }

    queryBuilder.orderBy('payment.createdAt', 'DESC');

    const [allPayments, total] = await queryBuilder
      .skip((page - 1) * perPage)
      .take(perPage)
      .getManyAndCount();

    const totalPages = Math.ceil(total / perPage);
    const hasNextPage = page < totalPages;
    return {
      data: FindAllPaymentMapper.toDomain(allPayments),
      totalCount: total,
      currentPage: page,
      totalPages,
      hasNextPage,
      perPage,
    };
  }
}
