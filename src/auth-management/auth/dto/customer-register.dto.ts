import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class CustomerRegisterDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
//   @Length(5, 15, {
//     message: 'Contact number must be between 5 and 15 characters',
//   })
  @IsString({ message: 'Contact number must be a string' })
  contactNo: string;

  @IsString()
  dialCode: string;

  @IsEmail({}, { message: 'Please enter a valid email address' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
//   @MinLength(4, {
//     message: 'Your Password not storng enought',
//   })
  password: string;

  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsString()
  @IsNotEmpty()
  fcmToken: string;

  @IsOptional()
  otp: string;

  roleId?: string;
}
