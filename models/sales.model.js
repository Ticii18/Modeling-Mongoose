import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employer", 
        required: true 
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products", 
        required: true 
    },
    date: {
        type: Date,
        required: true, 
        default: Date.now 
    },
    amount: {
        type: Number,
        required: true, 
        min: 0 
    },
    quantity: {
        type: Number,
        required: true, 
        min: 1
    }
});

const Sales = mongoose.model("Sales", saleSchema);

export default Sales;