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

  async create(createVariantDataDto: CreateVariantDataDto) {

    try {
      const variantData: VariantData = new VariantData();
      variantData.nameLang = createVariantDataDto.nameLang;
      variantData.dataArea = createVariantDataDto.dataArea;
      variantData.shortDescription = createVariantDataDto.shortDescription;
      variantData.type = createVariantDataDto.type;
      variantData.active = createVariantDataDto.active;
      variantData.createdBy = createVariantDataDto.createdBy;
      variantData.code = createVariantDataDto.code;
      variantData.hex = createVariantDataDto.hex;
      variantData.variant_id = createVariantDataDto.variant_id;
      variantData.parent_variant_id = createVariantDataDto.parent_variant_id;
      variantData.longDescription = createVariantDataDto.longDescription;
      variantData.approvedBy = createVariantDataDto.approvedBy;
      variantData.webImage = createVariantDataDto.webImage;
      variantData.mobileImage = createVariantDataDto.mobileImage;

      return await this.variantDataRepository.save(variantData);
    } catch (error) {
      console.log(error);
    }

  }

  async findAll() {
    try {
      return await this.variantDataRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    try {
      const exist = await this.variantDataRepository.findOne({ where: { id } });

      if (!exist) {
        return "No Data Found"
      }

      return await this.variantDataRepository.findOne({ where: { id } });

    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateVariantDataDto: UpdateVariantDataDto) {
    try {

      const exist = await this.variantDataRepository.findOne({ where: { id } });

      if (!exist) {
        return "No Data Found"
      }
      return await this.variantDataRepository.update(id, updateVariantDataDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {
      const exist = await this.variantDataRepository.findOne({ where: { id } });

      if (!exist) {
        return "No Data Found"
      }

      return await this.variantDataRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
