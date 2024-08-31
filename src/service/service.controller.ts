import { Body, Controller, Get, Post } from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post('create')
  create(@Body() data) {
    return this.serviceService.create(data);
  }
  @Get('find-all')
  findAll() {
    return this.serviceService.findAll();
  }
}
