import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('payments')
@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-charge')
  @ApiOperation({ summary: 'Create a new charge' })
  @ApiResponse({
    status: 201,
    description: 'The charge has been successfully created.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  createCharge(
    @Body()
    createChargeDto: {
      name: string;
      description: string;
      amount: number;
      currency: string;
    },
  ) {
    return this.paymentService.createCharge(
      createChargeDto.name,
      createChargeDto.description,
      createChargeDto.amount,
      createChargeDto.currency,
    );
  }
}
