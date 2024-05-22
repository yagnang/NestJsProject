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
  ) {}
  // create(createVariantDto: CreateVariantDto) {
  //   return 'This action adds a new variant';
  // }
  create(createVariantDto: CreateVariantDto): Promise<Variant> {
    const variant: Variant = new Variant();
    variant.nameLang = createVariantDto.nameLang;
    variant.description = createVariantDto.description;
    variant.active = createVariantDto.active;
    variant.dataArea = createVariantDto.dataArea;
    variant.type = createVariantDto.type;
    variant.createdBy = createVariantDto.createdBy;
    variant.updatedBy = createVariantDto.updatedBy;
    variant.updatedOn = createVariantDto.updatedOn;

    return this.variantRepository.save(variant);
  }

  findAll() {
    return `This action returns all variant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} variant`;
  }

  update(id: number, updateVariantDto: UpdateVariantDto) {
    return `This action updates a #${id} variant`;
  }

  remove(id: number) {
    return `This action removes a #${id} variant`;
  }
}
