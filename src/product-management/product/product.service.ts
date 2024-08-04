import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductAbstractRepository } from './infrastructure/repositories/product.abstract.repositories';
import { StatusEnum } from 'src/common/enum/status.enum';
import { TransactionService } from 'src/transaction/transaction.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductAbstractRepository,
    private readonly transactionService: TransactionService,
  ) {}

  findByName(productName: string) {
    return this.productRepository.findByName(productName);
  }

  async findByProductByName(productName: string) {
    console.log(productName);

    const isExsits = await this.findByName(productName);

    if (!isExsits) {
      return null;
    } else {
      if (isExsits.status === StatusEnum.ACTIVE) {
        throw new HttpException(
          'You entered product alredy exsits in active list',
          HttpStatus.CONFLICT,
        );
      } else if (isExsits.status === StatusEnum.INACTIVE) {
        throw new HttpException(
          'You entered product alredy in inactive list,please activeate it',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  async create(data: any) {
    const isExsits = await this.findByName(data.name);
    if (!isExsits) {
    } else {
      if (isExsits.status === StatusEnum.ACTIVE) {
        throw new HttpException(
          'You entered product alredy exsits in active list',
          HttpStatus.CONFLICT,
        );
      } else if (isExsits.status === StatusEnum.INACTIVE) {
        throw new HttpException(
          'You entered product alredy in inactive list,please activeate it',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }
}
