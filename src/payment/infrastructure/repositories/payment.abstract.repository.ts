import { AdvancePaymentDto } from 'src/payment/dto/advancePayment.dto';
import { PaymentFiltersDto } from 'src/payment/dto/payment-filters.dto';

export abstract class PaymentAbstractRepository {
  abstract makeAdvancePayment(data: AdvancePaymentDto);

  abstract findAll(filters: PaymentFiltersDto);
}
