import { Exclude, Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
  IsJSON,
  IsDate,
} from 'class-validator';
@Exclude()
export class CreateVariantDto {
  @IsOptional()
  @Expose()
  @IsNotEmpty()
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

  @IsOptional()
  @IsDate()
  createdOn: Date;

  @IsOptional()
  @IsString()
  updatedBy: string;

  @IsOptional()
  @IsDate()
  updatedOn: Date;
}
