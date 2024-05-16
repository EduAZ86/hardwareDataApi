import { Test, TestingModule } from '@nestjs/testing';
import { BenchdataService } from './benchdata.service';

describe('BenchdataService', () => {
  let service: BenchdataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenchdataService],
    }).compile();

    service = module.get<BenchdataService>(BenchdataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
