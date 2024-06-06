
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 3001;
  await app.listen(port, () => {
    console.log(`[NestApplication] Nest application successfully started`);
    console.log(`Backend is running on http://localhost:${port}`);
  });
}

bootstrap();
