import { Expose, Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { lowerCaseTransformer } from '../../../utils/transformers/lower-case.transformer';

export class CommonLoginDto {
  @IsOptional()
  @IsString()
  @Transform(lowerCaseTransformer)
  @IsEmail({}, { message: 'Please enter a valid email address' })
  private email: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  deviceId: string;

  @IsOptional()
  fcmToken: string;

  getEmail(): string {
    return this.email;
  }
}
