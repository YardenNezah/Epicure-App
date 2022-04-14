import mongoose from 'mongoose';

const chefSchema = new mongoose.Schema({
    chefName: {
        type: String,
        required: true
    },
    chefDescription: {
        type: String,
        required: true
    },
    chefImage: {
        type: String,
        required: true,
        default: "https://i.ibb.co/KXj8k3Z/rectangle.png"
    },
    chefOfTheWeek: {
        type: Boolean,
        required: true,
    }
})

const chef = mongoose.model("chef", chefSchema)

export default chef;