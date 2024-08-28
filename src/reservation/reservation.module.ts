import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { ReservationPersistenceModule } from './infrastructure/reservation-persistence.module';

@Module({
  imports: [ReservationPersistenceModule],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
