import mongoose, { Schema, Document } from 'mongoose';

export interface IReport extends Document {
    productId: mongoose.Schema.Types.ObjectId;
    totalSales: number;
    totalRevenue: number;
    reportDate: Date;
    lastUpdated: Date;
}

const ReportSchema: Schema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product' // Reference to the Product model
    },
    totalSales: {
        type: Number,
        required: true,
        default: 0
    },
    totalRevenue: {
        type: Number,
        required: true,
        default: 0
    },
    reportDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        required: true,
        default: Date.now
    },
});

const Report = mongoose.models.Report || mongoose.model<IReport>("Report", ReportSchema);

export default Report;
