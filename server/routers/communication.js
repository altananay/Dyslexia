import express from "express"
import communication from "../models/communication.js"

const router = express.Router();

router.post("/iletisim", async (req, res)=> {
    try {
        const {firstName, lastName, email, description} = req.body;
        console.log(req.body);
        const createdContact = await communication.create({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Description: description
        })

        return res.status(201).json(createdContact);
    } catch (error) {
        console.log(error);
        return res.json({message: "hata."});

    }
})

export default router;