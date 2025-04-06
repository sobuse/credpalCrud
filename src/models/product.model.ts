import mongoose, {Document} from 'mongoose';

export interface IProduct extends Document{
    name: string;
    description: string;
    price: number;
    category: string;
    user: mongoose.Schema.Types.ObjectId;
}

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},
{
    timestamps: true,
}
);
export default mongoose.model<IProduct>('Product', productSchema);