import { IsNotEmpty, IsNumber, IsString, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConvertCurrencyDto {
  @ApiProperty({ example: 1.0 })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  cryptoAmount: number;

  @ApiProperty({ example: 'BTC' })
  @IsNotEmpty()
  @IsString()
  cryptoCurrency: string;

  @ApiProperty({ example: 'USD' })
  @IsNotEmpty()
  @IsString()
  fiatCurrency: string;
}
