import { Controller, Get, Inject } from '@nestjs/common';
import { DeviceTrackService } from "./device-track.service"
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Controller('device-track')
export class DeviceTrackController {
  constructor(@Inject('MOSQUITTO_MQTT') private readonly mqttClient: ClientProxy) { }
  async onApplicationBootstrap() {
    await this.mqttClient.connect();
    console.log("TRIGGER - Bootstrap")
    this.mqttClient.emit('track', "Hello from server")
  }
  
  @EventPattern('track_res')
  getTracking(data: unknown) {
    console.log("TRIGGER")
    console.log(data);
    return 'Message Received'
  }
}
