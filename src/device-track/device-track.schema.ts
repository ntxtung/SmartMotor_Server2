import * as mongoose from 'mongoose';

export const DeviceTrackSchema = new mongoose.Schema({
  deviceNumber: {
    type: String,
    required: "{deviceNumber} is required",
  },
  lat: {
    type: String,
    required: "{lat} is required",
  },
  lon: {
    type: String,
    required: "{lon} is required",
  },
  battery: {
    type: String,
    required: "{battery} is required",
  },
  gpsFixMode: {
    type: String,
    required: "{gpsFixMode} is required",
  },
  fixQuality: {
    type: String,
    required: "{fixQuality} is required",
  },
  satelitesTracked: {
    type: String,
    required: "{satelitesTracked} is required",
  },
  gpsSatesTotal: {
    type: String,
    required: "{gpsSatesTotal} is required",
  },
  isFixed: {
    type: String,
    required: "{isFixed} is required",
  },
  createdDate: {
    type: Date,
    required: "{createDate} is required"
  }
});