import { Test, TestingModule } from '@nestjs/testing';
import { SsdController } from './ssd.controller';
import { BenchDataService } from '../bench-data.service';

describe('SsdController', () => {
  let controller: SsdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SsdController],
      providers: [BenchDataService],
    }).compile();

    controller = module.get<SsdController>(SsdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
