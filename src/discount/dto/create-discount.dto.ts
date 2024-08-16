import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiscountDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  value: number;

  @IsString()
  startAt: any;

  @IsString()
  endAt: any;

  @IsString()
  fileId: string;
}
