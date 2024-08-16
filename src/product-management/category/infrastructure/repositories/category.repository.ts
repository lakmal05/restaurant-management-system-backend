import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CategoryAbstractRepository } from './category.abstract.repository';
import { CategoryEntity } from '../entites/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, IsNull, Not, Repository } from 'typeorm';
import { CategoryDto } from '../../dto/category.dto';
import { StatusEnum } from 'src/common/enum/status.enum';
import { UpdateCategoryDto } from '../../dto/update-cateogry.dto';

@Injectable()
export class CategoryRepository implements CategoryAbstractRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  
  ) {}


  findByName(name: string) {
    return this.categoryRepository.findOne({
      where: {
        name: name,
        status: StatusEnum.ACTIVE,
      },
    });
  }

  findById(categoryId: string): Promise<CategoryEntity> {
    return this.categoryRepository.findOne({
      where: {
        status: In([StatusEnum.ACTIVE, StatusEnum.INACTIVE]),
        id: categoryId,
      },
    }) as any;
  }

 

  async create(data: CategoryDto) {
    return await this.categoryRepository.save({
      name: data.name,
      file: {
        id: data.fileId,
      },
    });
  }

  async update(categoryId: string, data: UpdateCategoryDto) {
    try {
      return await this.categoryRepository.update(
        { id: categoryId },
        {
          name: data.name,
          file: {
            id: data?.fileId,
          },
          status: data.status,
        },
      );
    } catch (error) {
      throw new HttpException(
        `Oops! Unable to update ${data.name} category , please try again later`,
        HttpStatus.NOT_MODIFIED,
      );
    }
  }


}
