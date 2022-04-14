import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    chef: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobileImage: {
        type: String,
        required: true,
    },
    desktopImage: {
        type: String,
        required: true,
    },
    bigImage: {
        type: String,
        required: true,
    },
    isPopular: {
        type: Boolean,
        required: true,
    },
    openingHour: {
        type: String,
        required: true,
    },
    closingHour: {
        type: String,
        required: true,
    },
    isNewRestaurant: {
        type: Boolean,
        required: true,
    }
})


const restaurant = mongoose.model("restaurant", restaurantSchema);

export default restaurant;