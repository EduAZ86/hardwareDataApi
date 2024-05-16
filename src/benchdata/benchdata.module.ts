import { Module } from '@nestjs/common';
import { BenchdataController } from './benchdata.controller';
import { BenchdataService } from './benchdata.service';

@Module({
  controllers: [BenchdataController],
  providers: [BenchdataService]
})
export class BenchdataModule {}
