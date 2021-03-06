import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserService } from "../user/user.service";
import { DeviceType } from "./dto/device.dto";
import { Device } from "./device.document";
import { NewDeviceInput } from "./dto/new-device-input.dto";

@Injectable()
export class DeviceService {
    constructor(@InjectModel('Device') 
        private deviceModel: Model<Device>,
        private userService: UserService
    ) { }

    async create(newDeviceDto: NewDeviceInput): Promise<DeviceType> {
        const createdDevice = new this.deviceModel(newDeviceDto);
        return await createdDevice.save();
    }

    async findAll(): Promise<DeviceType[]> {
        return await this.deviceModel.find().exec();
    }
    async findOneById(id: String): Promise<DeviceType> {
        return await this.deviceModel.findOne({ _id: id });
    }
    async findOneByPlateNumber(plateNumber: String): Promise<DeviceType> {
        return await this.deviceModel.findOne({ plateNumber: plateNumber });
    }
    async findOneByDeviceNumber(deviceNumber: String): Promise<DeviceType> {
        return await this.deviceModel.findOne({ deviceNumber: deviceNumber });
    }
    async findByUsername(username: String): Promise<DeviceType[]> {
        const user = await this.userService.findOneByUsername(username)
        return await this.deviceModel.find({ clientId: user._id })
    }
    async findByClientId(clientId: String): Promise<DeviceType[]> {
        return await this.deviceModel.find({ clientId: clientId });
    }
}
