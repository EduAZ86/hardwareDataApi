import { Module } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { HddController } from './hdd.controller';

@Module({
  controllers: [HddController],
  providers: [BenchDataService],
})
export class HddModule { }
