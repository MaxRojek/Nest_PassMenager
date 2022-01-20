import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  if (!configService.isProduction()) {

    const document = SwaggerModule.createDocument(app, new DocumentBuilder()
      .setTitle('Item API')
      .setDescription('My Item API')
      .build());

    SwaggerModule.setup('docs', app, document);

  }
  await app.listen(3000);
}
bootstrap();
// dodać do jwt algo RSA dane wysyłane w jwt są zaszyfrowane public key
//z powrotem gdy dostajemy jwt jest sprawdzane private key 