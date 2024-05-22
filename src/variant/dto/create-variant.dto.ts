import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
  IsDefined,
  IsObject,
} from 'class-validator';
export class CreateVariantDto {

  @IsNotEmpty()
  @IsDefined()
  @IsObject()
  nameLang: any;

  @IsOptional()
  @IsString()
  dataArea: string;

  @IsOptional()
  @IsObject()
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
