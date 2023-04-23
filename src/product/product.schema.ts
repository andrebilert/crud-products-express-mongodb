import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    name: String,
    quantity: Number,
    price: Number,
},{
    timestamps: true
})

export default model('Product', userSchema)