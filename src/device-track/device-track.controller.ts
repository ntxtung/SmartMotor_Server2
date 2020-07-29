import { Controller, Get, Inject } from '@nestjs/common';
import { DeviceTrackService } from "./device-track.service"
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { NewDeviceTrackInput } from './dto/new-track-input.dto'

@Controller('device-track')
export class DeviceTrackController {
  constructor(
    @Inject('MOSQUITTO_MQTT') private readonly mqttClient: ClientProxy,
    private readonly deviceTrackService: DeviceTrackService
  ) { }
  async onApplicationBootstrap() {
    await this.mqttClient.connect();
  }
  
  @EventPattern('smartmotor/track/+')
  async getTracking(data: any) {
    // console.log("In-coming:", data);
    var newTrackData : NewDeviceTrackInput = {
      deviceNumber: data.deviceNumber,
      gpsFixMode: data.gpsFixMode,
      fixQuality: data.fixQuality,
      satelitesTracked: data.satelitesTracked,
      gpsSatesTotal: data.gpsSatesTotal,
      isFixed: data.isFixed,
      lat: data.lat,
      lon: data.lon,
      battery: data.batt,
      createdDate: new Date()
    }
    this.deviceTrackService.create(newTrackData)
  }
}
