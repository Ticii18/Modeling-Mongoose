import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true 
    },
    description: {
        type: String,
        trim: true 
    },
    price: {
        type: Number,
        required: true, 
        min: 0 
    },
    stock: {
        type: Number,
        required: true, 
        min: 0 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

const Products = mongoose.model("Products", productsSchema);

export default Products;
