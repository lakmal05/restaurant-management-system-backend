import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsString()
  manufactureDetails: string;

  @IsString()
  mediaId: string;

  @IsString()
  categoryId: string;
}
