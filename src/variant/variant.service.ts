import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';
import { Variant } from './entities/variant.entity';

@Injectable()
export class VariantService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Variant)
    private readonly variantRepository: Repository<Variant>,
  ) { }
  // create(createVariantDto: CreateVariantDto) {
  //   return 'This action adds a new variant';
  // }
  async create(createVariantDto: CreateVariantDto): Promise<Variant> {
    try {
      const variant: Variant = new Variant();
      variant.nameLang = createVariantDto.nameLang;
      variant.dataArea = createVariantDto.dataArea;
      variant.description = createVariantDto.description;
      variant.type = createVariantDto.type;
      variant.active = createVariantDto.active;
      variant.createdBy = createVariantDto.createdBy;

      return await this.variantRepository.save(variant);
    } catch (error) {
      console.log(error);
    }

  }

  async findAll() {
    try {
      return await this.variantRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    try {

      const exist = await this.variantRepository.findOne({ where: { id } });

      if (!exist) {
        return "No Data Found"
      }

      return await this.variantRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error('Failed to find variant');
    }
  }


  async update(id: string, updateVariantDto: UpdateVariantDto) {
    try {

      const exist = await this.variantRepository.findOne({ where: { id } });

      if (!exist) {
        return "No Data Found"
      }

      return await this.variantRepository.update(id, updateVariantDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {

      const exist = await this.variantRepository.findOne({ where: { id } });

      if (!exist) {
        return "No Data Found"
      }

      return await this.variantRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
