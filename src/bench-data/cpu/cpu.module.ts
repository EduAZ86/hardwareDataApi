import { Module } from '@nestjs/common';
import { CpuController } from './cpu.controller';
import { BenchDataService } from '../bench-data.service';

@Module({
  controllers: [CpuController],
  providers: [BenchDataService],
})
export class CpuModule { }
