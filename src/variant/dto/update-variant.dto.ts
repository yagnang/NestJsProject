import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsBoolean,
    IsObject,
    IsDate,
} from 'class-validator';

export class UpdateVariantDto {
    @IsOptional()
    @IsNotEmpty()
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

    @IsOptional()
    @IsString()
    updatedBy: string;

    @IsOptional()
    @IsDate()
    updatedOn: Date;
}
