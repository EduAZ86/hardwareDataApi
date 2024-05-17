import { Module } from '@nestjs/common';
import { BenchDataService } from '../bench-data.service';
import { RamController } from './ram.controller';

@Module({
  controllers: [RamController],
  providers: [BenchDataService],
})
export class RamModule { }
