import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsBoolean,
    IsObject,
    IsDateString,
} from 'class-validator';

export class UpdateVariantDataDto {
    @IsOptional()
    @IsNotEmpty()
    @IsObject()
    nameLang: object;

    @IsOptional()
    @IsString()
    dataArea: string;

    @IsOptional()
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

    @IsOptional()
    @IsDateString()
    createdOn: Date;

    @IsOptional()
    @IsString()
    updatedBy: string;

    @IsOptional()
    @IsDateString()
    updatedOn: Date;

    @IsNotEmpty()
    @IsString()
    code: string;

    @IsOptional()
    @IsString()
    hex: string;

    @IsNotEmpty()
    @IsString()
    variant_id: string;

    @IsOptional()
    @IsString()
    parent_variant_id: string;

    @IsOptional()
    @IsObject()
    longDescription: object;

    @IsNotEmpty()
    @IsString()
    approvedBy: string;

    @IsOptional()
    @IsString()
    webImage: string;

    @IsOptional()
    @IsString()
    mobileImage: string;
}
