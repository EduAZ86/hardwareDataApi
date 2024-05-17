import { Module } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { SsdController } from './ssd.controller';

@Module({
  controllers: [SsdController],
  providers: [BenchDataService],
})
export class SsdModule { }
