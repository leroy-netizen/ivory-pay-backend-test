import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Settlement } from './settlement.entity';
import { SettlementService } from './settlement.service';
import { SettlementController } from './settlement.controller';
import { MerchantModule } from '../merchant/merchant.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Settlement]),
    MerchantModule,
  ],
  providers: [SettlementService],
  controllers: [SettlementController],
})
export class SettlementModule {}
