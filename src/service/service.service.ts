import { Injectable } from '@nestjs/common';
import { ServiceAbstractRepository } from './infrastructure/repositories/service.abstract.repository';

@Injectable()
export class ServiceService {
  constructor(private readonly serviceRepository: ServiceAbstractRepository) {}
  create(data: any) {
    return this.serviceRepository.create(data);
  }

  findAll() {
    return this.serviceRepository.findAll();
  }
}
