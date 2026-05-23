import express from "express"

const router = express.Router();

router.post("/iletisim", async (req, res)=> {
    try {
        const {firstName, lastName, email, description} = req.body;
        const createdContact = {
            _id: "mock_msg_" + Date.now(),
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Description: description,
            createdAt: new Date()
        };
        return res.status(201).json(createdContact);
    } catch (error) {
        return res.json({message: "hata."});
    }
})

export default router;