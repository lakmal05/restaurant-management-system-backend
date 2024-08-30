import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationAbstractRepository } from './repositories/reservation.abstract.repository';
import { ReservationEntity } from './entites/reservation.entity';
import { ReservationRepository } from './repositories/reservation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationEntity])],
  providers: [
    {
      provide: ReservationAbstractRepository,
      useClass: ReservationRepository,
    },
  ],
  exports: [ReservationAbstractRepository],
})
export class ReservationPersistenceModule {}
