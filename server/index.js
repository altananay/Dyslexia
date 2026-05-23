import express from "express"
import cors from "cors"
import communicationRouter from "./routers/communication.js"
import userRouter from "./routers/user.js"
import VinegradRouter from "./routers/vinegradResult.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use(communicationRouter);
app.use(userRouter);
app.use(VinegradRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} (mock mode - no MongoDB)`);
})
