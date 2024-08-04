import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { ILike, In, Repository } from 'typeorm';
import { ProductAbstractRepository } from './product.abstract.repositories';
import { ProductEntity } from '../entites/product.entity';
import { CategoryEntity } from 'src/product-management/category/infrastructure/entites/category.entity';
import { StatusEnum } from 'src/common/enum/status.enum';

@Injectable()
export class ProductRepository implements ProductAbstractRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
 
  ) {}

  async findByName(productName: string) {
    return await this.productRepository.findOne({
      where: {
        name: ILike(`%${productName}%`),
      },
    });
  }
}
