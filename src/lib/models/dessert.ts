import mongoose, { Document, Schema } from 'mongoose';

interface IDessert extends Document {
    name: string;
    price: number;
    description: string;
}

const DessertSchema: Schema = new Schema({
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

const Dessert = mongoose.models.Dessert || mongoose.model<IDessert>("Dessert", DessertSchema);

export default Dessert;