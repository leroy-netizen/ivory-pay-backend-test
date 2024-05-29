import { Controller, Get, Param, Query, Body, Post } from '@nestjs/common';
import { SettlementService } from './settlement.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ConvertCurrencyDto } from './dto/convert-currency.dto';

@ApiTags('settlements')
@Controller('settlements')
export class SettlementController {
  constructor(private readonly settlementService: SettlementService) {}

  @Get('history/:merchantId')
  @ApiOperation({ summary: 'Get settlement history for a merchant' })
  @ApiResponse({
    status: 200,
    description: 'Returns settlement history for a merchant',
  })
  @ApiResponse({ status: 404, description: 'Merchant not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getSettlementHistory(@Param('merchantId') merchantId: number) {
    return this.settlementService.getSettlementHistory(merchantId);
  }

  @Post('convert')
  @ApiOperation({ summary: 'Convert cryptocurrency to fiat currency' })
  @ApiBody({ type: ConvertCurrencyDto })
  @ApiResponse({
    status: 200,
    description: 'Returns converted fiat amount',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async convertToFiat(@Body() convertCurrencyDto: ConvertCurrencyDto) {
    const { cryptoAmount, cryptoCurrency, fiatCurrency } = convertCurrencyDto;
    return this.settlementService.convertToFiat(
      cryptoAmount,
      cryptoCurrency,
      fiatCurrency,
    );
  }
}
