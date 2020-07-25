import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { DeviceTrack } from "./device-track.document"
import { NewDeviceTrackInput } from "./dto/new-track-input.dto";
import { DeviceTrackType } from "./dto/track.dto";
@Injectable()
export class DeviceTrackService {
    constructor(@InjectModel('DeviceTrack') private deviceTrackModel: Model<DeviceTrack>) { }

    async create(newDeviceTrackDto: NewDeviceTrackInput): Promise<DeviceTrackType> {
        const createdDeviceTrack = new this.deviceTrackModel(newDeviceTrackDto);
        return await createdDeviceTrack.save();
    }

    async findAll(): Promise<DeviceTrackType[]> {
        return await this.deviceTrackModel.find().exec();
    }
    async findOneById(id: String): Promise<DeviceTrackType> {
        return await this.deviceTrackModel.findOne({ _id: id });
    }
    async findByDeviceNumber(deviceNumber: String): Promise<DeviceTrackType[]> {
        return await this.deviceTrackModel.find({ deviceNumber: deviceNumber });
    }
}
