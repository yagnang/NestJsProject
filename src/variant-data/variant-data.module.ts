import { Module } from '@nestjs/common';
import { VariantDataService } from './variant-data.service';
import { VariantDataController } from './variant-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VariantData } from './entities/variant-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VariantData])],
  controllers: [VariantDataController],
  providers: [VariantDataService],
})
export class VariantDataModule { }
