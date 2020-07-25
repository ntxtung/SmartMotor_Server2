import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  const mqttApp = await NestFactory.createMicroservice(AppModule, 
    {
      transport: Transport.MQTT,
      options: {
        url: process.env.MQTT_URL,
      },
    }
  )
  mqttApp.listenAsync()
  await app.listen(3000);
}
bootstrap();
