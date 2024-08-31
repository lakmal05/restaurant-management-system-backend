import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  productIds: [];

  @IsNumber()
  @IsOptional()
  discountAmount: number;

  @IsNumber()
  @IsOptional()
  netTotal: number;

  @IsNumber()
  subTotal: number;

  @IsString()
  paymentType: any;

  @IsOptional()
  shippingFee: number;
}

export class DeliveryDetailDto {
  type: any;

  @IsString()
  fistName: string;

  @IsString()
  lastName: string;

  @IsString()
  contactNo: string;
  @IsString()
  email: string;

  @IsString()
  city: string;

  @IsString()
  addressLine1: string;

  @IsString()
  addressLine2: string;
}
