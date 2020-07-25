import { Document } from 'mongoose';

export interface Device extends Document {
    readonly _id: string;
    readonly clientId: string;
    readonly plateNumber: string;
}