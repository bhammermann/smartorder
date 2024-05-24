import mongoose, { Document, Schema } from 'mongoose';

interface IPasta extends Document {
    name: string;
    price: number;
    description: string;
}

const PastaSchema: Schema = new Schema({
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

const Pasta = mongoose.models.Pasta || mongoose.model<IPasta>("Pasta", PastaSchema);

export default Pasta;