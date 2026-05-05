import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    propertyType: {
        type: String,
        required: true,
    },
    bhk: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    saleAmount: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },

    submittedAt: {
        type: Date,
        default: Date.now,
    },
});

const Sale = mongoose.model('Sale', saleSchema);

export default Sale;
