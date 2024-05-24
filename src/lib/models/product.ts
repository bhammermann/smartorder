// import mongoose, { Schema, Document } from 'mongoose';

// export interface IProduct extends Document {
//     name: string;
//     price: number;
//     description: string;
// }

// const ProductSchema: Schema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
// });


// const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

// export default Product;

import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
}

const ProductSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

export default function getModel(collectionName: string) {
    return mongoose.models[collectionName] || mongoose.model<IProduct>(collectionName, ProductSchema);
}