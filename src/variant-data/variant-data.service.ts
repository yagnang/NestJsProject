import { Injectable } from '@nestjs/common';
import { CreateVariantDataDto } from './dto/create-variant-data.dto';
import { UpdateVariantDataDto } from './dto/update-variant-data.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VariantData } from './entities/variant-data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VariantDataService {

  constructor(
    @InjectRepository(VariantData)
    private readonly variantDataRepository: Repository<VariantData>,
  ) { }

  create(createVariantDataDto: CreateVariantDataDto) {

    const variantData: VariantData = new VariantData();
    variantData.nameLang = createVariantDataDto.nameLang;
    variantData.dataArea = createVariantDataDto.dataArea;
    variantData.shortDescription = createVariantDataDto.shortDescription;
    variantData.type = createVariantDataDto.type;
    variantData.active = createVariantDataDto.active;
    variantData.createdBy = createVariantDataDto.createdBy;
    variantData.updatedBy = createVariantDataDto.updatedBy;
    variantData.updatedOn = createVariantDataDto.updatedOn;
    variantData.code = createVariantDataDto.code;
    variantData.hex = createVariantDataDto.hex;
    variantData.variant_id = createVariantDataDto.variant_id;
    variantData.parent_variant_id = createVariantDataDto.parent_variant_id;
    variantData.longDescription = createVariantDataDto.longDescription;
    variantData.approvedBy = createVariantDataDto.approvedBy;
    variantData.webImage = createVariantDataDto.webImage;
    variantData.mobileImage = createVariantDataDto.mobileImage;

    return this.variantDataRepository.save(variantData);
  }

  findAll() {
    return `This action returns all variantData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} variantDatum`;
  }

  update(id: number, updateVariantDataDto: UpdateVariantDataDto) {
    return `This action updates a #${id} variantDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} variantDatum`;
  }
}
