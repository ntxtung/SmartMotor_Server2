import * as mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

export const DeviceSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: "{clientId} is required",
  },
  deviceNumber: {
    type: String,
    required: "{deviceNumber} is required",
    index: {
      unique: true
    }
  },
  plateNumber: {
    type: String,
    required: "{plateNumber} is required",
    index: {
      unique: true
    }
  }
});