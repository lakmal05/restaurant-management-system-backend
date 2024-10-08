import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { ReservationAbstractRepository } from './infrastructure/repositories/reservation.abstract.repository';

@Injectable()
export class ReservationService {
  findOne(arg0: string): any {
    throw new Error('Method not implemented.');
  }
  update(arg0: string, updateData: { email: string; }): any {
    throw new Error('Method not implemented.');
  }
  delete(arg0: string): any {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly reservationRepository: ReservationAbstractRepository,
  ) {}

  create(data: CreateReservationDto) {
    return this.reservationRepository.create(data);
  }

  acceptOrReject(reservationId: string, status: any) {
    return this.reservationRepository.acceptOrReject(reservationId, status);
  }
  findAll() {
    return this.reservationRepository.findAll();
  }
}
