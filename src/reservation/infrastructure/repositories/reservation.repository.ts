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
  findAll() {
    return this.reservationRepository.find();
  }
  acceptOrReject(reservationId: string, status: any) {
    return this.reservationRepository.update(
      { id: reservationId },
      { status: status },
    );
  }
  async create(data: CreateReservationDto) {
    return this.reservationRepository.save({
      email: data.getEmail(),
      contactNo: data.getContactNo(),
      time: data.getTime(),
      date: data.getDate(),
      personCount: data.getPersonCount(),
      payment: data.getPaymentId(),
      reservationCode: await this.createRandomCode(),
    });
  }

  createRandomCode(): string {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
}
