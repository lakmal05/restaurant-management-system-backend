import { Injectable } from '@nestjs/common';
import { ServiceAbstractRepository } from './service.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from '../entites/service.entity';

@Injectable()
export class ServiceRepository implements ServiceAbstractRepository {
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly serviceRepository: Repository<ServiceEntity>,
  ) {}
}
