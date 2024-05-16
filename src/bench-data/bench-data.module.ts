import { Module } from '@nestjs/common';
import { CpuModule } from './cpu/cpu.module';
import { BenchDataService } from './bench-data.service';

@Module({
    imports: [CpuModule],
    providers: [BenchDataService]
})
export class BenchDataModule { }
