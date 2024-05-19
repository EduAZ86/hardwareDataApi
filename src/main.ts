import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { CORS } from './constants';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors(CORS)

  app.setGlobalPrefix('api')

  app.use(morgan('dev'))

  await app.listen(3000);

  console.log(`Server running on: ${await app.getUrl()}`);

}
bootstrap();
