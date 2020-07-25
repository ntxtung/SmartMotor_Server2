import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Transport, ClientsModule } from '@nestjs/microservices';

import { DeviceTrackService } from './device-track.service';
import { DeviceTrackResolver } from './device-track.resolver';

import { DeviceTrackSchema } from "./device-track.schema"
import { DeviceTrackController } from './device-track.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DeviceTrack', schema: DeviceTrackSchema }]),
    ClientsModule.register([
      { 
        name: 'MOSQUITTO_MQTT', 
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://167.71.194.83:1883'
        }
      },
    ])
  ],
  providers: [DeviceTrackService, DeviceTrackResolver],
  exports: [DeviceTrackService],
  controllers: [DeviceTrackController]
})
export class DeviceTrackModule { }
