import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { DeviceTrackService } from "./device-track.service";
import { DeviceTrackType } from "./dto/track.dto";

@Resolver('DeviceTrack')
export class DeviceTrackResolver {
    constructor(
        private readonly deviceTrackService: DeviceTrackService
    ) { }

    @Query(() => [DeviceTrackType])
    async deviceTracks() : Promise<DeviceTrackType[]>{
        return this.deviceTrackService.findAll()
    }
    
    @Query(() => [DeviceTrackType])
    async deviceTrackByDeviceNumber(@Args('input') deviceNumber: String) : Promise<DeviceTrackType[]>{
        return this.deviceTrackService.findByDeviceNumber(deviceNumber)
    }
}
