import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import communicationRouter from "./routers/communication.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(communicationRouter);

app.listen(5000, () => {
    mongoose.connect(process.env.CONNECTION_URL).then(() => {
        console.log("connected to mongodb...")
    }).catch(error => {
        console.log(error)
    })
})