import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InquiriesAbstractRepository } from './inquiries.abstract.repository';
import { InquiriesEntity } from '../entites/inquiries.entity';

@Injectable()
export class InquiriesRepository implements InquiriesAbstractRepository {
  constructor(
    @InjectRepository(InquiriesEntity)
    private readonly inquiriesRepository: Repository<InquiriesEntity>,
  ) {}
}
