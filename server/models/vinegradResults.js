import mongoose from "mongoose";

let date = new Date();
date = date.toLocaleString()


const vinegradResultSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required:true
    },
    Result : {
        type: Number,
        required: true
    },
    FinishedAt: {
        type: String,
        default: date
    },
    userType: {
        type: String,
        enum: ['USER', 'ADMIN', "GUEST"],
        default: 'USER'
    },
})

export default mongoose.model("VinegradResults", vinegradResultSchema)