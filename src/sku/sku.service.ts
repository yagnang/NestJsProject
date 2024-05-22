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
    sku.createdOn = createSkuDto.createdOn;
    sku.modifiedBy = createSkuDto.modifiedBy;
    sku.modifiedOn = createSkuDto.modifiedOn;
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
      return await this.skuRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error('Failed to find variant');
    }
  }

  update(id: string, updateSkuDto: UpdateSkuDto) {
    try {
      return this.skuRepository.update(id, updateSkuDto);
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: string) {
    try {
      return this.skuRepository.delete(id)
        ;
    } catch (error) {
      console.log(error);
    }
  }
}