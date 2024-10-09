import mongoose from "mongoose";

const employerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    DNI:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true
    },
    dateBirth:{
        type: Date,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    sales:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sale",

    }
})

const employer = mongoose.model("employer", employerSchema);

export default employer;
