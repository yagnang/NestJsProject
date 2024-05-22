import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsBoolean, IsObject, IsDefined } from 'class-validator';

@Exclude()
export class CreateSkuDto {
    @Expose()
    @IsNotEmpty()
    @IsDefined()
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
    code: string;

    @IsOptional()
    @IsString()
    productId: string;

    @IsOptional()
    @IsString()
    variantsData: string;

    @IsNotEmpty()
    @IsDefined()
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
