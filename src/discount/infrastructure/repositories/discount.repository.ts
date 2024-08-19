import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DiscountAbstractRepository } from './discount.abstract.repository';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscountEntity } from '../entites/discount.entity';
import { CreateDiscountDto } from 'src/discount/dto/create-discount.dto';

@Injectable()
export class DiscountRepository implements DiscountAbstractRepository {
  constructor(
    @InjectRepository(DiscountEntity)
    private readonly discountRepository: Repository<DiscountEntity>,
  ) {}

  create(data: CreateDiscountDto) {
    return this.discountRepository.save({
      title: data.title,
      description: data.description,
      startAt: data.startAt,
      endAt: data.endAt,
      value: data.value,
      file: {
        id: data.fileId,
      },
    });
  }
}
