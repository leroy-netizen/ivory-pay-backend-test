import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchant } from './merchant.entity';

@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(Merchant)
    private merchantsRepository: Repository<Merchant>,
  ) {}

  findAll(): Promise<Merchant[]> {
    return this.merchantsRepository.find();
  }

  findOne(id: number): Promise<Merchant> {
    return this.merchantsRepository.findOneBy({ id });
  }

  create(merchant: Merchant): Promise<Merchant> {
    return this.merchantsRepository.save(merchant);
  }

  async update(id: number, updateData: Partial<Merchant>): Promise<Merchant> {
    await this.merchantsRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.merchantsRepository.delete(id);
  }
}
