import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Transport, ClientsModule } from '@nestjs/microservices';

import { DeviceTrackService } from './device-track.service';
import { DeviceTrackResolver } from './device-track.resolver';

import { DeviceTrackSchema } from "./device-track.schema"
import { DeviceTrackController } from './device-track.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'DeviceTrack', schema: DeviceTrackSchema }]),
    ClientsModule.register([
      { 
        name: 'MOSQUITTO_MQTT', 
        transport: Transport.MQTT,
        options: {
          url: process.env.MQTT_URL
        }
      },
    ])
  ],
  providers: [DeviceTrackService, DeviceTrackResolver],
  exports: [DeviceTrackService],
  controllers: [DeviceTrackController]
})
export class DeviceTrackModule { }
