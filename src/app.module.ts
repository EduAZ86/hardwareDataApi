import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BenchDataModule } from './bench-data/bench-data.module';
import { CpuModule } from './cpu/cpu.module';
import { GpuModule } from './gpu/gpu.module';



@Module({
  imports: [BenchDataModule, CpuModule, GpuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
