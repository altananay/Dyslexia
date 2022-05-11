import mongoose from "mongoose"

const communicationSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email : {
        type: String,
        required: true
    },
    Description: {
        type: Text,
        required: true
    }
})