import { Schema, model } from "mongoose";
import { ICountdown } from "../../../typings";
const cdSchema = new Schema({
  jid: {
    type: String,
    required: true,
    unique: true,
  },
  gamble: {
      type: Number
  },
  slot: {
      type: Number
   },
  rob: {
      type:Number
  }
});
export default model<ICountdown>("countdown", cdSchema);
