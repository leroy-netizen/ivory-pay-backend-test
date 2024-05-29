// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Param,
//   Body,
//   HttpException,
//   HttpStatus,
// } from '@nestjs/common';
// import { MerchantService } from './merchant.service';
// import { CreateMerchantDto } from './dto/create-merchant.dto';
// import { Merchant } from './merchant.entity';
// import {
//   ApiTags,
//   ApiOperation,
//   ApiResponse,
//   ApiParam,
//   ApiBody,
// } from '@nestjs/swagger';

// @ApiTags('merchants')
// @Controller('merchants')
// export class MerchantController {
//   constructor(private readonly merchantService: MerchantService) {}

//   @Get()
//   @ApiOperation({ summary: 'Get all merchants' })
//   @ApiResponse({ status: 200, description: 'Returns all merchants' })
//   @ApiResponse({ status: 500, description: 'Internal server error' })
//   async findAll(): Promise<Merchant[]> {
//     return this.merchantService.findAll();
//   }

//   @Post('register')
//   @ApiOperation({ summary: 'Register a new merchant' })
//   @ApiBody({ type: CreateMerchantDto })
//   @ApiResponse({ status: 201, description: 'Merchant registered successfully' })
//   @ApiResponse({ status: 400, description: 'Bad request' })
//   @ApiResponse({ status: 500, description: 'Internal server error' })
//   async create(
//     @Body() createMerchantDto: CreateMerchantDto,
//   ): Promise<Merchant> {
//     return this.merchantService.create(createMerchantDto);
//   }

//   @Get(':id')
//   @ApiOperation({ summary: 'Get a merchant by ID' })
//   @ApiParam({
//     name: 'id',
//     required: true,
//     description: 'ID of the merchant to retrieve',
//   })
//   @ApiResponse({ status: 200, description: 'Returns the merchant' })
//   @ApiResponse({ status: 404, description: 'Merchant not found' })
//   @ApiResponse({ status: 500, description: 'Internal server error' })
//   async findOne(@Param('id') id: number): Promise<Merchant> {
//     return this.merchantService.findOne(id);
//   }

//   @Put(':id')
//   @ApiOperation({ summary: 'Update a merchant' })
//   @ApiParam({
//     name: 'id',
//     required: true,
//     description: 'ID of the merchant to update',
//   })
//   @ApiBody({ type: CreateMerchantDto })
//   @ApiResponse({ status: 200, description: 'Merchant updated successfully' })
//   @ApiResponse({ status: 404, description: 'Merchant not found' })
//   @ApiResponse({ status: 500, description: 'Internal server error' })
//   async update(
//     @Param('id') id: number,
//     @Body() updateData: Partial<Merchant>,
//   ): Promise<Merchant> {
//     return this.merchantService.update(id, updateData);
//   }

//   @Delete(':id')
//   @ApiOperation({ summary: 'Delete a merchant' })
//   @ApiParam({
//     name: 'id',
//     required: true,
//     description: 'ID of the merchant to delete',
//   })
//   @ApiResponse({ status: 200, description: 'Merchant deleted successfully' })
//   @ApiResponse({ status: 404, description: 'Merchant not found' })
//   @ApiResponse({ status: 500, description: 'Internal server error' })
//   async remove(@Param('id') id: number): Promise<void> {
//     return this.merchantService.remove(id);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { Merchant } from './merchant.entity';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('merchants')
@Controller('merchants')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Get()
  @ApiOperation({ summary: 'Get all merchants' })
  @ApiResponse({ status: 200, description: 'Returns all merchants' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<Merchant[]> {
    return this.merchantService.findAll();
  }

  @Post('register')
  @ApiOperation({ summary: 'Register a new merchant' })
  @ApiBody({ type: CreateMerchantDto })
  @ApiResponse({ status: 201, description: 'Merchant registered successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(
    @Body() createMerchantDto: CreateMerchantDto,
  ): Promise<Merchant> {
    return this.merchantService.create(createMerchantDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a merchant by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of the merchant to retrieve',
  })
  @ApiResponse({ status: 200, description: 'Returns the merchant' })
  @ApiResponse({ status: 404, description: 'Merchant not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: number): Promise<Merchant> {
    return this.merchantService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a merchant' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of the merchant to update',
  })
  @ApiBody({ type: CreateMerchantDto })
  @ApiResponse({ status: 200, description: 'Merchant updated successfully' })
  @ApiResponse({ status: 404, description: 'Merchant not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Merchant>,
  ): Promise<Merchant> {
    return this.merchantService.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a merchant' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of the merchant to delete',
  })
  @ApiResponse({ status: 200, description: 'Merchant deleted successfully' })
  @ApiResponse({ status: 404, description: 'Merchant not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.merchantService.remove(id);
  }
}
