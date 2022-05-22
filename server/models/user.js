import mongoose from 'mongoose'

let date = new Date();
date = date.toLocaleString()

const userSchema = mongoose.Schema({
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
    password: {
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
    signedAt: {
        type: String,
        default: date
    },
    userType: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }
})

export default mongoose.model('Users', userSchema)