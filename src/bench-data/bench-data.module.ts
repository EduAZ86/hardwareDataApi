import { Module } from '@nestjs/common';
import { CpuModule } from './cpu/cpu.module';
import { GpuModule } from './gpu/gpu.module';
import { RamModule } from './ram/ram.module';
import { SsdModule } from './ssd/ssd.module';
import { HddModule } from './hdd/hdd.module';
import { UsbModule } from './usb/usb.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
    CpuDataSchema,
    GpuDataSchema,
    HddDataSchema,
    RamDataSchema,
    SsdDataSchema,
    UsbDataSchema
} from './schema/bench-data.schema';

@Module({
    imports: [
        CpuModule,
        GpuModule,
        RamModule,
        SsdModule,
        HddModule,
        UsbModule,
        MongooseModule.forFeature(
            [
                {
                    name: 'cpuData',
                    schema: CpuDataSchema
                },
                {
                    name: 'gpuData',
                    schema: GpuDataSchema
                },
                {
                    name: 'ramData',
                    schema: RamDataSchema
                },
                {
                    name: 'ssdData',
                    schema: SsdDataSchema
                },
                {
                    name: 'hddData',
                    schema: HddDataSchema
                },
                {
                    name: 'usbData',
                    schema: UsbDataSchema
                },

            ]
        )]
})
export class BenchDataModule { }
