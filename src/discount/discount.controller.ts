import { Body, Controller, Post } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';

@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post('create')
  create(@Body() data:CreateDiscountDto) {
    return this.discountService.create(data);
  }


  
}
