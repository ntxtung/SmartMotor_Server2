import { Document } from 'mongoose';

export interface DeviceTrack extends Document {
    readonly _id: string;
    readonly deviceNumber: string;
    readonly plateNumber: string;
    readonly lat: string;
    readonly lon: string;
    readonly battery: string;
    readonly createdDate: Date;
}