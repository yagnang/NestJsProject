import { Test, TestingModule } from '@nestjs/testing';
import { VariantDataService } from './variant-data.service';

describe('VariantDataService', () => {
  let service: VariantDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariantDataService],
    }).compile();

    service = module.get<VariantDataService>(VariantDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
