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

  findAll() {
    return `This action returns all sku`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sku`;
  }

  update(id: number, updateSkuDto: UpdateSkuDto) {
    return `This action updates a #${id} sku`;
  }

  remove(id: number) {
    return `This action removes a #${id} sku`;
  }
}
