import { Injectable } from '@nestjs/common';
import { ReservationAbstractRepository } from './reservation.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservationEntity } from '../entites/reservation.entity';
import { CreateReservationDto } from 'src/reservation/dto/create-reservation.dto';

@Injectable()
export class ReservationRepository implements ReservationAbstractRepository {
  constructor(
    @InjectRepository(ReservationEntity)
    private readonly reservationRepository: Repository<ReservationEntity>,
  ) {}
  create(data: CreateReservationDto) {
    return this.reservationRepository.save({
      email: data.getEmail(),
      contactNo: data.getContactNo(),
      time: data.getTime(),
      date: data.getDate(),
      personCount: data.getPersonCount(),
      payment: data.getPaymentId(),
    });
  }
}
