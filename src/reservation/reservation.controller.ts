import { Body, Controller, Post } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post('create')
  create(@Body() data: CreateReservationDto) {
    return this.reservationService.create(data);
  }
}
