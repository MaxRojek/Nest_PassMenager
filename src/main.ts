import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
// dodać do jwt algo RSA dane wysyłane w jwt są zaszyfrowane public key
//z powrotem gdy dostajemy jwt jest sprawdzane private key 