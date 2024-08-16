import { CreateOrderDto } from 'src/order/dto/create-order.dto';
import { UpdatePaymentTransactionResponseDto } from 'src/payment/dto/update-payment-transaction-response.dto';
import { CreateOrderTransactionDto } from 'src/transaction/dto/transaction-create-order.dto';

export abstract class TransactionAbstractRepository {
 

  abstract createOnlinePaymentOrderTransaction(data: CreateOrderTransactionDto);

  abstract createStaff(data: any);

  abstract registerCustomer(data);

  abstract createCashOnDeliveryOrderTransaction(data: CreateOrderDto);
}
