import mongoose from "mongoose"

let date = new Date();
date = date.toLocaleString()

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
        type: String,
        required: true
    },
    SendedAt: {
        type: String,
        default: date
    }
})

export default mongoose.model("Communications", communicationSchema);