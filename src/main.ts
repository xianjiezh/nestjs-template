import { NestFactory } from '@nestjs/core';
import { initPgDataBase } from 'db-init/init-database-pg';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/transform.interceptor';

async function bootstrap() {
  await initPgDataBase();
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
