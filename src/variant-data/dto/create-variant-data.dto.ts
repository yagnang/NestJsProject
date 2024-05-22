import { Exclude, Expose } from 'class-transformer';
import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsBoolean,
    IsObject,
    IsDateString,
    IsDefined,
} from 'class-validator';

@Exclude()
export class CreateVariantDataDto {
    @Expose()
    @IsNotEmpty()
    @IsDefined()
    @IsObject()
    nameLang: object;

    @IsOptional()
    @IsString()
    dataArea: string;

    @IsNotEmpty()
    @IsDefined()
    @IsObject()
    shortDescription: object;

    @IsOptional()
    @IsString()
    type: string;

    @IsOptional()
    @IsBoolean()
    active: boolean;

    @IsOptional()
    @IsString()
    createdBy: string;

    @IsNotEmpty()
    @IsDefined()
    @IsString()
    code: string;

    @IsOptional()
    @IsString()
    hex: string;

    @IsNotEmpty()
    @IsDefined()
    @IsString()
    variant_id: string;

    @IsOptional()
    @IsString()
    parent_variant_id: string;

    @IsOptional()
    @IsObject()
    longDescription: object;

    @IsNotEmpty()
    @IsDefined()
    @IsString()
    approvedBy: string;

    @IsOptional()
    @IsString()
    webImage: string;

    @IsOptional()
    @IsString()
    mobileImage: string;
}
