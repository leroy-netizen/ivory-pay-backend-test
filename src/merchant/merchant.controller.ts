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
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('merchants')
@Controller('merchants')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Get()
  @ApiOperation({ summary: 'Get all merchants' })
  @ApiResponse({ status: 200, description: 'Return all merchants.' })
  findAll(): Promise<Merchant[]> {
    return this.merchantService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a merchant by ID' })
  @ApiResponse({ status: 200, description: 'Return a single merchant.' })
  @ApiResponse({ status: 404, description: 'Merchant not found.' })
  findOne(@Param('id') id: number): Promise<Merchant> {
    return this.merchantService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new merchant' })
  @ApiResponse({
    status: 201,
    description: 'The merchant has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() merchant: Merchant): Promise<Merchant> {
    return this.merchantService.create(merchant);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a merchant' })
  @ApiResponse({
    status: 200,
    description: 'The merchant has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Merchant not found.' })
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Merchant>,
  ): Promise<Merchant> {
    return this.merchantService.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a merchant' })
  @ApiResponse({
    status: 200,
    description: 'The merchant has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Merchant not found.' })
  remove(@Param('id') id: number): Promise<void> {
    return this.merchantService.remove(id);
  }
}
