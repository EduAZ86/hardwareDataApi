import { Test, TestingModule } from '@nestjs/testing';
import { BenchdataController } from './benchdata.controller';

describe('BenchdataController', () => {
  let controller: BenchdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BenchdataController],
    }).compile();

    controller = module.get<BenchdataController>(BenchdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
