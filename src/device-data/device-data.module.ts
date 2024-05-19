import { Module } from '@nestjs/common';
import { DeviceDataService } from './device-data.service';
import { DeviceDataController } from './device-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CpuData, CpuDataSchema, GpuData, GpuDataSchema, HddData, HddDataSchema, RamData, RamDataSchema, SsdData, SsdDataSchema, UsbData, UsbDataSchema } from './schema/device-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CpuData.name,
        schema: CpuDataSchema,
        collection:'cpudatas'
      },
      {
        name: GpuData.name,
        schema: GpuDataSchema,
        collection:'gpudatas'
      },
      {
        name: RamData.name,
        schema: RamDataSchema,
        collection:'ramdatas'
      },
      {
        name: SsdData.name,
        schema: SsdDataSchema,
        collection:'ssddatas'
      },
      {
        name: HddData.name,
        schema: HddDataSchema,
        collection:'hdddatas'
      },
      {
        name: UsbData.name,
        schema: UsbDataSchema,
        collection:'usbdatas'
      }
    ])
  ],
  controllers: [DeviceDataController],
  providers: [DeviceDataService],
})
export class DeviceDataModule { }
