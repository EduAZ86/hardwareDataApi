import { Module } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { UsbController } from './usb.controller';

@Module({
  controllers: [UsbController],
  providers: [BenchDataService],
})
export class UsbModule { }
