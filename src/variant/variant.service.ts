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
  create(createVariantDto: CreateVariantDto): Promise<Variant> {
    try {
      const variant: Variant = new Variant();
      variant.nameLang = createVariantDto.nameLang;
      variant.dataArea = createVariantDto.dataArea;
      variant.description = createVariantDto.description;
      variant.type = createVariantDto.type;
      variant.active = createVariantDto.active;
      variant.createdBy = createVariantDto.createdBy;

      return this.variantRepository.save(variant);
    } catch (error) {
      console.log(error);
    }

  }

  findAll() {
    try {
      return this.variantRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: string) {
    try {
      return this.variantRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error('Failed to find variant');
    }
  }


  update(id: string, updateVariantDto: UpdateVariantDto) {
    try {
      return this.variantRepository.update(id, updateVariantDto);
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: string) {
    try {
      return this.variantRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
