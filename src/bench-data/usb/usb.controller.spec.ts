import { Test, TestingModule } from '@nestjs/testing';
import { UsbController } from './usb.controller';
import { BenchDataService } from '../bench-data.service';

describe('UsbController', () => {
  let controller: UsbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsbController],
      providers: [BenchDataService],
    }).compile();

    controller = module.get<UsbController>(UsbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
