import express from "express";
import vinegradResults from "../models/vinegradResults.js";

const router = express.Router();

router.post("/test", (req, res) => {
  try {
    const result = req.body;
    vinegradResults.create(result);

    const id = req.body.User.UserId;
    const userExists = vinegradResults.findOne({ id });
    if (userExists) {
      return console.log("kullanıcı daha önce test olmuş");
    } else {
      const result = req.body;
      vinegradResults.create(result);

      return res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: error });
  }
});

export default router;
