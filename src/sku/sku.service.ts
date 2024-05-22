import { Injectable } from '@nestjs/common';
import { CreateSkuDto } from './dto/create-sku.dto';
import { UpdateSkuDto } from './dto/update-sku.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sku } from './entities/sku.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkuService {

  constructor(
    @InjectRepository(Sku)
    private readonly skuRepository: Repository<Sku>,
  ) { }

  create(createSkuDto: CreateSkuDto) {
    const sku: Sku = new Sku();
    sku.nameLang = createSkuDto.nameLang;
    sku.shortDescription = createSkuDto.shortDescription;
    sku.active = createSkuDto.active;
    sku.createdBy = createSkuDto.createdBy;
    sku.code = createSkuDto.code;
    sku.productId = createSkuDto.productId;
    sku.variantsData = createSkuDto.variantsData;
    sku.longDescription = createSkuDto.longDescription;
    sku.approvedBy = createSkuDto.approvedBy;
    sku.webImage = createSkuDto.webImage;
    sku.mobileImage = createSkuDto.mobileImage;

    return this.skuRepository.save(sku);
  }

  async findAll() {
    try {
      return this.skuRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    try {
      const exist = await this.skuRepository.findOne({ where: { id } });

      if (!exist) {
        return "No Data Found"
      }

      return await this.skuRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error('Failed to find variant');
    }
  }

  async update(id: string, updateSkuDto: UpdateSkuDto) {
    try {
      const exist = await this.skuRepository.findOne({ where: { id } });

      if (!exist) {
        return "No Data Found"
      }

      return await this.skuRepository.update(id, updateSkuDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {
      const exist = await this.skuRepository.findOne({ where: { id } });

      if (!exist) {
        return "No Data Found"
      }

      return await this.skuRepository.delete(id)
        ;
    } catch (error) {
      console.log(error);
    }
  }
}