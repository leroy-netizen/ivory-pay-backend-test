import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class PaymentService {
  private readonly apiKey: string;
  private readonly apiBaseUrl: string;

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('COINBASE_COMMERCE_API_KEY');
    this.apiBaseUrl = 'https://api.commerce.coinbase.com/';
  }

  async createCharge(
    name: string,
    description: string,
    amount: number,
    currency: string,
  ) {
    try {
      const response = await axios.post(
        `${this.apiBaseUrl}/charges/`,
        {
          name,
          description,
          pricing_type: 'fixed_price',
          local_price: {
            amount,
            currency,
          },
        },
        {
          headers: {
            'X-CC-Api-Key': this.apiKey,
            'X-CC-Version': '2018-03-22',
          },
        },
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to create charge',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
