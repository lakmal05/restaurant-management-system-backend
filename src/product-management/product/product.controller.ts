import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Prefixes } from 'src/utils/prefixes';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post(Prefixes.admin + 'product/' + 'create')
  create(@Body() data: any) {
    return this.productService.create(data);
  }
  @Get(Prefixes.admin + 'product/' + 'find-by-name/' + ':name')
  findByProductByName(@Param('name') name: string) {
    return this.productService.findByProductByName(name);
  }
}
