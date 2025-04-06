import mongoose, {Document} from 'mongoose';
import bcrypt from 'bcrypt';
import e from 'cors';

export interface IUser extends Document{
    username: string;
    email: string;
    password: string;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const userShema = new mongoose.Schema({
    username:{
        type: String,
        required : true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}

);