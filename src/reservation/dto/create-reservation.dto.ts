import { IsNumber, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  email: string;
  @IsNumber()
  personCount: number;
  @IsString()
  contactNo: string;
  @IsString()
  date: string;
  @IsString()
  time: any;
  @IsString()
  paymentId: string;
}
