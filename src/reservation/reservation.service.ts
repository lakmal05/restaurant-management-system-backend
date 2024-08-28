import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationService {
  create(data: CreateReservationDto) {}
}
