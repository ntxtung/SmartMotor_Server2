import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { DeviceService } from "./device.service";
import { NewDeviceInput } from "./dto/new-device-input.dto";
import { DeviceType } from "./dto/device.dto";

@Resolver('Device')
export class DeviceResolver {
    constructor(
        private readonly deviceService: DeviceService
    ) { }

    @Query(() => [DeviceType])
    async devices() : Promise<DeviceType[]>{
        return this.deviceService.findAll()
    }
    
    @Query(() => [DeviceType])
    async devicesByClientId(@Args('input') clientId: String) : Promise<DeviceType[]>{
        return this.deviceService.findByClientId(clientId)
    }

    @Query(() => DeviceType)
    async deviceByPlateNumber(@Args('input') plateNumber: String) : Promise<DeviceType>{
        return this.deviceService.findOneByPlateNumber(plateNumber)
    }

    @Query(() => DeviceType)
    async deviceByDeviceNumber(@Args('input') deviceNumber: String) : Promise<DeviceType>{
        return this.deviceService.findOneByDeviceNumber(deviceNumber)
    }
    
    @Mutation(() => DeviceType)
    async addNewDevice(@Args('input') input: NewDeviceInput) : Promise<DeviceType>{
        return this.deviceService.create(input);
    }


}
