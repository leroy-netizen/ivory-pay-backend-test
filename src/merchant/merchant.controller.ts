import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { Merchant } from './merchant.entity';

@Controller('merchants')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Get()
  findAll(): Promise<Merchant[]> {
    return this.merchantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Merchant> {
    return this.merchantService.findOne(id);
  }

  @Post()
  create(@Body() merchant: Merchant): Promise<Merchant> {
    return this.merchantService.create(merchant);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Merchant>,
  ): Promise<Merchant> {
    return this.merchantService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.merchantService.remove(id);
  }
}
