import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BenchdataModule } from './benchdata/benchdata.module';

@Module({
  imports: [BenchdataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
