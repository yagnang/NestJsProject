import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VariantDataService } from './variant-data.service';
import { CreateVariantDataDto } from './dto/create-variant-data.dto';
import { UpdateVariantDataDto } from './dto/update-variant-data.dto';

@Controller('variant-data')
export class VariantDataController {
  constructor(private readonly variantDataService: VariantDataService) { }

  @Post()
  create(@Body() createVariantDataDto: CreateVariantDataDto) {
    return this.variantDataService.create(createVariantDataDto);
  }

  @Get()
  findAll() {
    return this.variantDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variantDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVariantDataDto: UpdateVariantDataDto) {
    return this.variantDataService.update(+id, updateVariantDataDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.variantDataService.remove(+id);
  }
}
