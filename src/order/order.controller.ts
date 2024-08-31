import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  create(@Body() data: CreateOrderDto) {
    return this.orderService.create(data);
  }

  @Get('find-all')
  findAll() {
    return this.orderService.findAll();
  }
}
