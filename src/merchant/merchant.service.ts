import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchant } from './merchant.entity';
import { CreateMerchantDto } from './dto/create-merchant.dto';

@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(Merchant)
    private merchantsRepository: Repository<Merchant>,
  ) {}

  async findAll(): Promise<Merchant[]> {
    return this.merchantsRepository.find();
  }

  async create(createMerchantDto: CreateMerchantDto): Promise<Merchant> {
    const { email } = createMerchantDto;
    const existingMerchant = await this.merchantsRepository.findOne({
      where: { email },
    });

    if (existingMerchant) {
      throw new HttpException(
        'Merchant with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newMerchant = this.merchantsRepository.create(createMerchantDto);
    return await this.merchantsRepository.save(newMerchant);
  }

  async findOne(id: number): Promise<Merchant> {
    const merchant = await this.merchantsRepository.findOne({ where: { id } });

    if (!merchant) {
      throw new HttpException('Merchant not found', HttpStatus.NOT_FOUND);
    }

    return merchant;
  }

  async findByEmail(email: string): Promise<Merchant> {
    const merchant = await this.merchantsRepository.findOne({
      where: { email },
    });

    if (!merchant) {
      throw new HttpException('Merchant not found', HttpStatus.NOT_FOUND);
    }

    return merchant;
  }

  async update(id: number, updateData: Partial<Merchant>): Promise<Merchant> {
    await this.merchantsRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.merchantsRepository.delete(id);

    if (result.affected === 0) {
      throw new HttpException('Merchant not found', HttpStatus.NOT_FOUND);
    }
  }
}
