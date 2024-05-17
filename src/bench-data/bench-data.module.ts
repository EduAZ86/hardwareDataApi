import { Module } from '@nestjs/common';
import { CpuModule } from './cpu/cpu.module';
import { GpuModule } from './gpu/gpu.module';
import { RamModule } from './ram/ram.module';
import { SsdModule } from './ssd/ssd.module';
import { HddModule } from './hdd/hdd.module';
import { UsbModule } from './usb/usb.module';

@Module({
    imports: [CpuModule, GpuModule, RamModule, SsdModule, HddModule, UsbModule]
})
export class BenchDataModule { }
