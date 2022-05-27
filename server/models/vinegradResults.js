import mongoose from "mongoose";

let date = new Date();
date = date.toLocaleString()


const vinegradResultSchema = mongoose.Schema({
    User: {
        UserId: {
            type: mongoose.Types.ObjectId,
            ref: "Users",
            required: true
        },
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
            required: true
        },
        userType : {
            type: String,
            enum: ['USER', 'ADMIN', "GUEST"],
            default: 'USER'
        },
        signedAt : {
            type: String,
            default: date
        }
    },
    Result : {
        type: Number,
        required: true
    },
    FinishedAt: {
        type: String,
        default: date
    }
})

export default mongoose.model("VinegradResults", vinegradResultSchema)