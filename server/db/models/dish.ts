import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
    restaurant: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobileImage: {
        type: String,
        required: true
    },
    desktopImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    side: [{
        type: String,
        required: true
    }],
    changes: [{
        type: String,
        required: true
    }],
    dishType: {
        type: String,
        required: true
    }
})

const dish = mongoose.model("dish", dishSchema)

export default dish;