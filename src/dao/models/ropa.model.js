import mongoose from "mongoose";

const ropaCollection = "ropa";

const ropaSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require:true 
    }
});

const ropaModel = mongoose.model(ropaCollection, ropaSchema);
export {ropaModel};