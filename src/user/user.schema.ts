import * as mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

export const UserSchema = new mongoose.Schema({
  // _id : {
  //   type: String,
  //   required: true,
  //   index: {
  //     unique: true
  //   },
  //   default: uuid()
  // },
  username: {
    type: String,
    required: "{username} is required",
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: "{password} is required"
  }
});