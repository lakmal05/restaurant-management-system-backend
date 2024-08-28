import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InquiriesAbstractRepository } from './repositories/inquiries.abstract.repository';
import { InquiriesRepository } from './repositories/inquiries.repository';

@Module({
  providers: [
    {
      provide: InquiriesAbstractRepository,
      useClass: InquiriesRepository,
    },
  ],
  exports: [InquiriesAbstractRepository],
})
export class InquiriesPersistenceModule {}
