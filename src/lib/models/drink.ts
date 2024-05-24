import mongoose, { Document, Schema } from 'mongoose';

interface IDrink extends Document {
    name: string;
    price: number;
    description: string;
}

const DrinkSchema: Schema = new Schema({
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

const Drink = mongoose.models.Drink || mongoose.model<IDrink>("Drink", DrinkSchema);

export default Drink;