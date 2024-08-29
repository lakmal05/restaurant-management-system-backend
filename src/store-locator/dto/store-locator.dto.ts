import { IsString } from 'class-validator';

export class StoreLocatorDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  url: string;

  @IsString()
  facilities: string;
}
