import { Module } from '@nestjs/common';
import { GpuController } from './gpu.controller';
import { BenchDataService } from '../bench-data.service';

@Module({
  controllers: [GpuController],
  providers: [BenchDataService],
})
export class GpuModule { }
