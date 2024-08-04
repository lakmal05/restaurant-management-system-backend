import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateStaffDto {
  @IsNotEmpty()
  @IsString({ message: 'First Name  must be a string' })
  firstName: string;

  @IsNotEmpty()
  @IsString({ message: 'First Name  must be a string' })
  lastName: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a valid email address' })
  email: string;

  @IsNotEmpty()
  @IsString()
  roleId: string;

  @IsOptional()
  @IsString()
  fileId: string;

  @IsString()
  contactNo: string;
}
