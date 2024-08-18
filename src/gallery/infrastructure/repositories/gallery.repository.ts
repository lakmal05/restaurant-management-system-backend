import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GalleryAbstractRepository } from './gallery.abstract.repository';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerMapper } from '../mappers/customer.mapper';
import { GalleryEntity } from '../entites/gallery.entity';

@Injectable()
export class GalleryRepository implements GalleryAbstractRepository {
  constructor(
    @InjectRepository(GalleryEntity)
    private readonly galleryRepository: Repository<GalleryEntity>,
  ) {}

  findAll() {
    return this.galleryRepository.find({
      relations: {
        file: true,
      },
    });
  }

  async upload(data: any) {
    console.log(data.fileIds);

    await this.galleryRepository.save({
      file: {
        id: data.fileIds[0],
      },
    });
  }
}
