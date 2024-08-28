import { PaymentFiltersDto } from 'src/payment/dto/payment-filters.dto';
import { CreateReservationDto } from 'src/reservation/dto/create-reservation.dto';

export abstract class ReservationAbstractRepository {
  abstract create(data: CreateReservationDto);
}
