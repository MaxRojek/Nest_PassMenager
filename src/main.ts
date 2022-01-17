import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
// skończone na stronie w tutorialu przy definiowaniu base enity
// kolejny krok tutaj to zdefiniowanie relacji pomiędzy userem a kontami i ich hasłami 
//auth zrobić na końcu
// dodać do jwt algo RSA dane wysyłane w jwt są zaszyfrowane public key
//z powrotem gdy dostajemy jwt jest sprawdzane private key 