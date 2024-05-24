import mongoose, { Document, Schema } from 'mongoose';

interface IPizza extends Document {
    name: string;
    price: number;
    description: string;
}

const PizzaSchema: Schema = new Schema({
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

const Pizza = mongoose.models.Pizza || mongoose.model<IPizza>("Pizza", PizzaSchema);

export default Pizza;