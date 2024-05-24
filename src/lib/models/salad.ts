import mongoose, { Document, Schema } from 'mongoose';

interface ISalad extends Document {
    name: string;
    price: number;
    description: string;
}

const SaladSchema: Schema = new Schema({
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

const Salad = mongoose.models.Salad || mongoose.model<ISalad>("Salad", SaladSchema);

export default Salad;