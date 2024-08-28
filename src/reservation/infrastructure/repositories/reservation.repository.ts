import { Injectable } from '@nestjs/common';
import { ReservationAbstractRepository } from './reservation.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservationEntity } from '../entites/reservation.entity';

@Injectable()
export class ReservationRepository implements ReservationAbstractRepository {
  constructor(
    @InjectRepository(ReservationEntity)
    private readonly reservationRepository: Repository<ReservationEntity>,
  ) {}
}
