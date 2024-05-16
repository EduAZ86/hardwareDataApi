import { Test, TestingModule } from '@nestjs/testing';
import { BenchDataService } from './bench-data.service';

describe('BenchDataService', () => {
  let service: BenchDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenchDataService],
    }).compile();

    service = module.get<BenchDataService>(BenchDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
