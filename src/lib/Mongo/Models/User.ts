import { Schema, model } from 'mongoose'
import { IUserModel } from "../../../typings";
const UserSchema = new Schema({
    jid: {
        type: String,
        required: true,
        unique: true
    },
    ban: {
        type: Boolean,
        required: true,
        default: false
    },
    warnings: {
        type: Number,
        required: true,
        default: 0
    },
    Xp: {
        type: Number,
        required: true,
        default: 0
    },
    wallet: {
        type: Number,
        required: true,
        default: 0
    },
    bank: {
        type: Number,
        required: true,
        default: 0
    },
    coin: {
        type: Number
    },
    pokemons: {
        type: Number
    },
    lastDaily: {
        type: Number
    },
    lastRob: {
        type: Number
    },
    lastGamble: {
        type: Number
    },
    lastSlot: {
        type: Number
    }
})
export default model<IUserModel>('users', UserSchema)
