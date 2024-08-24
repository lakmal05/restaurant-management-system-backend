import { Body, Controller, Post } from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post('create')
  create(@Body() data) {
    return this.serviceService.create(data);
  }
}
