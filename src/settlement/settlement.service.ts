import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Settlement } from './settlement.entity';
import { MerchantService } from '../merchant/merchant.service';
import axios from 'axios';

@Injectable()
export class SettlementService {
  private readonly exchangeRateApiKey: string;

  constructor(
    @InjectRepository(Settlement)
    private settlementsRepository: Repository<Settlement>,
    private merchantService: MerchantService,
  ) {
    this.exchangeRateApiKey = process.env.FIAT_CONVERSION_API_KEY;
  }

  async getSettlementHistory(merchantId: number): Promise<Settlement[]> {
    const merchant = await this.merchantService.findOne(merchantId);
    if (!merchant) {
      throw new HttpException('Merchant not found', HttpStatus.NOT_FOUND);
    }
    return this.settlementsRepository.find({ where: { merchant } });
  }

  async convertToFiat(
    cryptoAmount: number,
    cryptoCurrency: string,
    fiatCurrency: string,
  ): Promise<number> {
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${this.exchangeRateApiKey}/latest/${cryptoCurrency}`,
      );
      const rate = response.data.conversion_rates[fiatCurrency];
      if (!rate) {
        throw new HttpException(
          'Currency not supported',
          HttpStatus.BAD_REQUEST,
        );
      }
      return cryptoAmount * rate;
    } catch (error) {
      throw new HttpException(
        'Failed to convert currency',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
