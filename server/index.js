import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import communicationRouter from "./routers/communication.js"

dotenv.config()

const app = express()

app.use(cors({credentials: true, origin:"https://disleksi.netlify.app/"}))
app.use(express.json())
app.use(communicationRouter);

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.CONNECTION_URL).then(() => {
        console.log("connected to mongodb...")
    }).catch(error => {
        console.log(error)
    })
})