import { IsOptional, IsString, IsBoolean, IsObject } from 'class-validator';

export class UpdateSkuDto {
    @IsOptional()
    @IsObject()
    nameLang: object;

    @IsOptional()
    @IsObject()
    shortDescription: object;

    @IsOptional()
    @IsBoolean()
    active: boolean;

    @IsOptional()
    @IsString()
    createdBy: string;

    @IsOptional()
    @IsString()
    modifiedBy: string;

    @IsOptional()
    modifiedOn: Date;

    @IsOptional()
    @IsString()
    code: string;

    @IsOptional()
    @IsString()
    productId: string;

    @IsOptional()
    @IsString()
    variantsData: string;

    @IsOptional()
    @IsObject()
    longDescription: object;

    @IsOptional()
    @IsString()
    approvedBy: string;

    @IsOptional()
    @IsString()
    webImage: string;

    @IsOptional()
    @IsString()
    mobileImage: string;
}

