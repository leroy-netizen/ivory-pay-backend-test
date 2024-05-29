import { IsNotEmpty, IsNumber, IsString, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateChargeDto {
  @ApiProperty({ example: 'Service Payment' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Payment for service rendered' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 100 })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  amount: number;

  @ApiProperty({ example: 'USD' })
  @IsNotEmpty()
  @IsString()
  currency: string;
}
