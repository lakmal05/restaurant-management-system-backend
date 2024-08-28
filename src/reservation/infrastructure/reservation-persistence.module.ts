import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationAbstractRepository } from './repositories/reservation.abstract.repository';
import { ReservationEntity } from './entites/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationEntity])],
  providers: [
    {
      provide: ReservationAbstractRepository,
      useClass: ReservationEntity,
    },
  ],
  exports: [ReservationAbstractRepository],
})
export class ReservationPersistenceModule {}
