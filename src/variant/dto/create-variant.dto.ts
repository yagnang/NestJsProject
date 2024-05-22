import { Exclude, Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
  IsJSON,
  IsDate,
  IsDefined,
} from 'class-validator';
@Exclude()
export class CreateVariantDto {

  @Expose()
  @IsNotEmpty()
  @IsDefined()
  @IsJSON()
  nameLang: any;

  @IsOptional()
  @IsString()
  dataArea: string;

  @IsOptional()
  @IsJSON()
  description: any;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsString()
  createdBy: string;

}
