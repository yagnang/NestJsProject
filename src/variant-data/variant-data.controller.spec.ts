import { Test, TestingModule } from '@nestjs/testing';
import { VariantDataController } from './variant-data.controller';
import { VariantDataService } from './variant-data.service';

describe('VariantDataController', () => {
  let controller: VariantDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VariantDataController],
      providers: [VariantDataService],
    }).compile();

    controller = module.get<VariantDataController>(VariantDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
