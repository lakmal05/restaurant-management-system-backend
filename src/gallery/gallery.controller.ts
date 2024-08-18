import { Body, Controller, Get, Post } from '@nestjs/common';
import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post('upload')
  upload(@Body() data: any) {
    return this.galleryService.upload(data);
  }

  @Get('find-all')
  findAll() {
    return this.galleryService.findAll();
  }
}
