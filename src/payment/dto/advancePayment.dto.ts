import { IsNumber } from 'class-validator';

export class AdvancePaymentDto {
  @IsNumber()
  amount: number;

  
}
