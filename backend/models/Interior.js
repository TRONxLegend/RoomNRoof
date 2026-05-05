import mongoose from 'mongoose';

const interiorSchema = new mongoose.Schema({
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
    roomType: {
        type: String,
        required: true,
    },
    style: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
})

const Interior = mongoose.model('Interior', interiorSchema);
export default Interior;
