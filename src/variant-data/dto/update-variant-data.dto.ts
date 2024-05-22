import { PartialType } from '@nestjs/mapped-types';
import { CreateVariantDataDto } from './create-variant-data.dto';

export class UpdateVariantDataDto extends PartialType(CreateVariantDataDto) { }
