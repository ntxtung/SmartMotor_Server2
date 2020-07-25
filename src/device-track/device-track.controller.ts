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
      lat: data.lat,
      lon: data.lon,
      battery: data.batt,
      fixQuality: data.fixQuality,
      gpsFixMode: data.gpsFixMode,
      gpsSatesTotal: data.gpsSatesTotal,
      satelitesTracked: data.satelitesTracked,
      isFixed: data.isFixed,
      createdDate: new Date()
    }
    console.log(newTrackData)
    this.deviceTrackService.create(newTrackData)
  }
}
